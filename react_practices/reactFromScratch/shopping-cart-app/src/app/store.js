import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

// Load cart from localStorage (if available)
const savedCart = localStorage.getItem('cartItems');
const preloadedCart = savedCart ? JSON.parse(savedCart) : [];

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: preloadedCart,
      loading: false,
      error: null
    }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Subscribe to store changes and save cart to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartItems', JSON.stringify(state.cart.items));
});