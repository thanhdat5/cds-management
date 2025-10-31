import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

/**
 * Generic CRUD state shape for a resource/entity.
 *
 * @template T - The entity type for the slice (e.g. User, Product)
 */
export interface CrudState<T> {
  items: T[]; // All entities in this slice
  total: number; // Total count of entities (for pagination, etc.)
  loading: boolean; // Loading indicator for async operations
  error: string | null; // Error message, if any
  selected: T | null; // Currently selected entity (for detail/edit view)
}

/**
 * Generic CRUD service interface. All CRUD functions must be typed and return Promises.
 *
 * @template T - The entity type for the service (e.g. User, Product)
 */
export interface CrudService<T> {
  getList: (
    params?: object
  ) => Promise<{ data: { items: T[]; total: number } }>;
  getById: (id: number | string) => Promise<{ data: T }>;
  create: (data: Partial<T>) => Promise<{ data: T }>;
  update: (id: number | string, data: Partial<T>) => Promise<{ data: T }>;
  remove: (id: number | string) => Promise<void>;
}

/**
 * Factory function to create a generic CRUD slice with thunks, reducers, and initial state.
 *
 * Usage:
 *   const userSlice = createCrudSlice<User>("users", userService);
 *   export default userSlice.reducer;
 *
 * @template T - The entity type for the slice
 * @param name - Slice name (used for action types and as a key in RootState)
 * @param service - CRUD service instance for this resource
 * @returns An object containing the reducer, actions, and thunks for the resource
 */
export function createCrudSlice<T extends { id: number | string }>(
  name: string,
  service: CrudService<T>
) {
  // ===============================
  // Async thunks for CRUD operations
  // ===============================

  /**
   * Fetch a paginated list of entities for this slice.
   */
  const fetchList = createAsyncThunk<
    { items: T[]; total: number },
    object | undefined,
    { rejectValue: string }
  >(`${name}/fetchList`, async (params, thunkAPI) => {
    try {
      const { data } = await service.getList(params);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err instanceof Error ? err.message : "Fetch list failed"
      );
    }
  });

  /**
   * Fetch a single entity by ID.
   */
  const fetchById = createAsyncThunk<
    T,
    number | string,
    { rejectValue: string }
  >(`${name}/fetchById`, async (id, thunkAPI) => {
    try {
      const { data } = await service.getById(id);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err instanceof Error ? err.message : "Fetch by ID failed"
      );
    }
  });

  /**
   * Create a new entity.
   */
  const createItem = createAsyncThunk<T, Partial<T>, { rejectValue: string }>(
    `${name}/create`,
    async (data, thunkAPI) => {
      try {
        const { data: item } = await service.create(data);
        return item;
      } catch (err) {
        return thunkAPI.rejectWithValue(
          err instanceof Error ? err.message : "Create failed"
        );
      }
    }
  );

  /**
   * Update an entity by ID.
   */
  const updateItem = createAsyncThunk<
    T,
    { id: number | string; data: Partial<T> },
    { rejectValue: string }
  >(`${name}/update`, async ({ id, data }, thunkAPI) => {
    try {
      const { data: item } = await service.update(id, data);
      return item;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err instanceof Error ? err.message : "Update failed"
      );
    }
  });

  /**
   * Remove (delete) an entity by ID.
   */
  const removeItem = createAsyncThunk<
    number | string,
    number | string,
    { rejectValue: string }
  >(`${name}/remove`, async (id, thunkAPI) => {
    try {
      await service.remove(id);
      return id; // Return deleted entity's ID for reducer logic
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err instanceof Error ? err.message : "Delete failed"
      );
    }
  });

  // ===============================
  // Initial state for the slice
  // ===============================
  const initialState: CrudState<T> = {
    items: [],
    total: 0,
    loading: false,
    error: null,
    selected: null,
  };

  // ===============================
  // Slice definition
  // ===============================
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      /**
       * Clear currently selected entity from state.
       */
      clearSelected(state) {
        state.selected = null;
      },
      /**
       * Clear error message from state.
       */
      clearError(state) {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Handle fetchList lifecycle
        .addCase(fetchList.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          fetchList.fulfilled,
          (state, action: PayloadAction<{ items: T[]; total: number }>) => {
            state.loading = false;
            state.items = action.payload.items as typeof state.items;
            state.total = action.payload.total;
          }
        )
        .addCase(fetchList.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch list failed";
        })
        // Handle fetchById lifecycle
        .addCase(fetchById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchById.fulfilled, (state, action: PayloadAction<T>) => {
          state.loading = false;
          state.selected = action.payload as typeof state.selected;
        })
        .addCase(fetchById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch by ID failed";
        })
        // Handle createItem lifecycle
        .addCase(createItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createItem.fulfilled, (state, action: PayloadAction<T>) => {
          state.loading = false;
          state.items.unshift(action.payload as (typeof state.items)[number]);
          state.total += 1;
        })
        .addCase(createItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Create failed";
        })
        // Handle updateItem lifecycle
        .addCase(updateItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateItem.fulfilled, (state, action: PayloadAction<T>) => {
          state.loading = false;
          state.items = state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ) as typeof state.items;
          if (state.selected?.id === action.payload.id) {
            state.selected = action.payload as typeof state.selected;
          }
        })
        .addCase(updateItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Update failed";
        })
        // Handle removeItem lifecycle
        .addCase(removeItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(
          removeItem.fulfilled,
          (state, action: PayloadAction<number | string>) => {
            state.loading = false;
            state.items = state.items.filter(
              (item) => item.id !== action.payload
            );
            state.total = Math.max(0, state.total - 1);
            // If the removed item was selected, clear it
            if (state.selected?.id === action.payload) {
              state.selected = null;
            }
          }
        )
        .addCase(removeItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Delete failed";
        });
    },
  });

  // Return reducer, actions, and thunks for integration with store & components
  return {
    reducer: slice.reducer,
    actions: slice.actions,
    thunks: { fetchList, fetchById, createItem, updateItem, removeItem },
  };
}
