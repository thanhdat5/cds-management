import type { RootState } from "../../app/store";

/**
 * Factory function to generate selectors for a nested CRUD slice.
 *
 * Use this when your CRUD slice is a child of another slice in the root state, e.g.:
 *   rootState = { masterData: { users: {...}, products: {...} }, ... }
 *
 * Usage:
 *   export const userSelectors = createNestedCrudSelectors<User>("masterData", "users");
 *   const users = useSelector(userSelectors.selectItems);
 *
 * @template T - The resource/entity type (e.g. User, Product)
 * @param parentKey - The top-level key in RootState (e.g. "masterData")
 * @param childKey - The nested key inside the parent slice (e.g. "users")
 * @returns An object with selectors for items, total, loading, error, and selected entity
 */
export function createNestedCrudSelectors<T>(
  parentKey: keyof RootState,
  childKey: keyof RootState[keyof RootState]
) {
  return {
    /**
     * Selects the list of entities from the nested slice state.
     * @param state - The root Redux state
     * @returns Array of entities of type T
     */
    selectItems: (state: RootState): T[] =>
      (state[parentKey][childKey] as unknown as { items: T[] }).items,

    /**
     * Selects the total count of entities from the nested slice state.
     * @param state - The root Redux state
     * @returns Total number of entities
     */
    selectTotal: (state: RootState): number =>
      (state[parentKey][childKey] as unknown as { total: number }).total,

    /**
     * Selects the loading status for CRUD operations from the nested slice state.
     * @param state - The root Redux state
     * @returns Boolean indicating if an operation is in progress
     */
    selectLoading: (state: RootState): boolean =>
      (state[parentKey][childKey] as unknown as { loading: boolean }).loading,

    /**
     * Selects the error message, if any, from the nested slice state.
     * @param state - The root Redux state
     * @returns Error message string or null
     */
    selectError: (state: RootState): string | null =>
      (state[parentKey][childKey] as unknown as { error: string | null }).error,

    /**
     * Selects the currently selected entity from the nested slice state.
     * @param state - The root Redux state
     * @returns The selected entity of type T or null
     */
    selectSelected: (state: RootState): T | null =>
      (state[parentKey][childKey] as unknown as { selected: T | null })
        .selected,
  };
}
