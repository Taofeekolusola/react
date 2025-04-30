import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔄 Async thunk for fetching users
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch products';
      });
  }
});

export default productsSlice.reducer;