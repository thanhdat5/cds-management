import { createNestedCrudSelectors } from "@common/store/crudNestedSelectors";
import type { User } from "./userTypes";
import type { RootState } from "../../../app/store";

export const userSelectors = createNestedCrudSelectors<User>(
  "masterData",
  "users" as keyof RootState[keyof RootState]
);
