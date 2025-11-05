import { createCrudSlice } from "@common/store/crudSliceFactory"; // adjust path as needed
import { userService } from "./userService";
import type { User } from "./userTypes";

/**
 * Creates a Redux slice for user CRUD operations.
 *
 * - Uses generic createCrudSlice factory for consistent CRUD logic.
 * - Handles async thunks for list, detail, create, update, and remove.
 * - Provides reducer, actions, and thunks for integration.
 * - State shape: { items: User[], total, loading, error, selected }
 *
 * Usage:
 *   import userReducer from './userSlice';
 *      Add to your root reducer as 'users'
 *      Use thunks: userSlice.thunks.fetchList(), etc.
 *      Use actions: userSlice.actions.clearError(), userSlice.actions.clearSelected()
 */
export const userSlice = createCrudSlice<User>("users", userService);

// Export reducer for store setup
export default userSlice.reducer;

// Optionally, export thunks and actions for direct use
export const userThunks = userSlice.thunks;
export const userActions = userSlice.actions;