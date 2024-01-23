import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "./features/productSlicer";

export const store = configureStore({
  reducer: {
    products: productSlicer,
  },
});
