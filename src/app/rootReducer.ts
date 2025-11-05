import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@features/auth/authSlice";
import masterDataReducer from "@features/master-data/masterDataReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  masterData: masterDataReducer
});

export default rootReducer;