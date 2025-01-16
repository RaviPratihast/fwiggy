import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import authReducer from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: authReducer,
  },
});

export default store;
