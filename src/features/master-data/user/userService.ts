import { createCrudService } from "@/common/services/crudServiceFactory";
import type { User } from "./userTypes";

/**
 * User service using generic CRUD service factory.
 * 
 * Provides getList, getById, create, update, and remove methods for "users" resource.
 * All methods return typed Promises for API communication.
 * 
 * Usage example:
 *   userService.getList({ page: 1, limit: 10 });
 *   userService.getById(123);
 *   userService.create({ name: "John" });
 *   userService.update(123, { name: "Jane" });
 *   userService.remove(123);
 */
export const userService = createCrudService<User>("users");