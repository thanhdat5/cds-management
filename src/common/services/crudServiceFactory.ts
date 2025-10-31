import axiosClient from "@/common/services/axiosClient";
import type { CRUDListResponse } from "../types/crudTypes";

/**
 * Factory function to create generic CRUD API methods for any resource.
 *
 * @template T - The type of the resource entity (e.g. User, Product)
 * @param resource - The API resource name (e.g. "users", "products")
 * @returns An object with CRUD methods: getList, getById, create, update, remove
 */
export function createCrudService<T>(resource: string) {
  return {
    /**
     * Fetch a paginated list of entities, optionally using query params.
     * @param params - Query parameters for the API request (optional)
     * @returns Axios promise resolving to an object with items and total count
     */
    getList: (params?: object) =>
      axiosClient.get<CRUDListResponse<T>>(`/${resource}`, { params }),

    /**
     * Fetch a single entity by ID.
     * @param id - The entity's unique identifier
     * @returns Axios promise resolving to the entity
     */
    getById: (id: number | string) =>
      axiosClient.get<T>(`/${resource}/${id}`),

    /**
     * Create a new entity with the given data.
     * @param data - Partial entity data for creation
     * @returns Axios promise resolving to the newly created entity
     */
    create: (data: Partial<T>) =>
      axiosClient.post<T>(`/${resource}`, data),

    /**
     * Update an entity by ID with the given data.
     * @param id - The entity's unique identifier
     * @param data - Partial entity data for update
     * @returns Axios promise resolving to the updated entity
     */
    update: (id: number | string, data: Partial<T>) =>
      axiosClient.put<T>(`/${resource}/${id}`, data),

    /**
     * Remove (delete) an entity by ID.
     * @param id - The entity's unique identifier
     * @returns Axios promise resolving to void
     */
    remove: (id: number | string) =>
      axiosClient.delete<void>(`/${resource}/${id}`).then(() => undefined),
  };
}