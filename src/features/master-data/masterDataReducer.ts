import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const masterDataReducer = combineReducers({
  users: userReducer
});

export default masterDataReducer;