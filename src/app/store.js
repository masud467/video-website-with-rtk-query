import { configureStore } from "@reduxjs/toolkit";
import { videoApi } from "../features/api/videoApi";

export const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(videoApi.middleware),
});
