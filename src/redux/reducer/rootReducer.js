import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import LoginReducer from "../slices/login/loginSlice";
import userDetailsReducer from "../slices/userList/UserListSlice";
import bookmarkedUserReducer from "../slices/bookmarkedUser/bookmarkedUserSlice";
const persistConfig = {
  key: "userworld",
  storage,
  whitelist: ["userDetails"],
};

// const persistedReducer = persistReducer(persistConfig, LoginReducer);

export const rootReducer = combineReducers({
//   login: persistedReducer,
  userDetails: userDetailsReducer,
  bookmarkedUser: bookmarkedUserReducer,
});