import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice.jsx";
import CategorySlice from "./slices/CategorySlice.jsx";
import SearchSlice from "./slices/SearchSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use cartReducer instead of CartSlice for clarity
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default store;
