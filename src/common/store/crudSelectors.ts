import type { RootState } from "../../app/store";

/**
 * Factory for CRUD selectors. Only use for slices with the CRUD shape!
 */
export function createCrudSelectors<T>(sliceKey: keyof RootState) {
  return {
    /**
     * Selects the entities array from slice.
     */
    selectItems: (state: RootState): T[] =>
      (state[sliceKey] as unknown as { items: T[] }).items,

    /**
     * Selects the total count from slice.
     */
    selectTotal: (state: RootState): number =>
      (state[sliceKey] as unknown as { total: number }).total,

    /**
     * Selects the loading status from slice.
     */
    selectLoading: (state: RootState): boolean =>
      (state[sliceKey] as unknown as { loading: boolean }).loading,

    /**
     * Selects the error message from slice.
     */
    selectError: (state: RootState): string | null =>
      (state[sliceKey] as unknown as { error: string | null }).error,

    /**
     * Selects the currently selected entity from slice.
     */
    selectSelected: (state: RootState): T | null =>
      (state[sliceKey] as unknown as { selected: T | null }).selected,
  };
}