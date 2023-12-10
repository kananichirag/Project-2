import { configureStore } from "@reduxjs/toolkit";
import userReducre from "../redux/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducre,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});
