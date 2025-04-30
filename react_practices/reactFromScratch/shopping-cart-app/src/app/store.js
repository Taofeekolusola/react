import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/product/productsSlice';
import cartReducer from '../feature/cart/cartSlice';

// ✅ Load cart from localStorage (if available)
const savedCart = localStorage.getItem('cartItems');
const preloadedCart = savedCart ? JSON.parse(savedCart) : [];

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: preloadedCart
    }
  }
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cartItems', JSON.stringify(state.cart.items));
  });