import { RootState } from './../app/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartApi from 'api/cartApi';
import { CartItem } from 'interfaces';
import { CartPayLoad } from './../interfaces/cart';

export interface CartState {
  cartItems: CartItem[];
  selectedList: CartItem[];
  loading: boolean;
  start: boolean;
}

export const initialState: CartState = {
  cartItems: [],
  selectedList: [],
  loading: false,
  start: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setSelectedList: (state, action) => {
      const list = action.payload;
      state.selectedList = list;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.loading = false;
      state.start = false;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.cartItems = [];
      state.loading = false;
      state.start = false;
    });
  },
});

export const getCart = createAsyncThunk('/cart', async (userId: number, { dispatch }) => {
  const { data } = await cartApi.getByUserId(userId, {});
  return data;
});
export const addToCart = createAsyncThunk(
  '/cart/add',
  async (payLoad: CartPayLoad, { dispatch }) => {
    await cartApi.addCartItem(payLoad);
    dispatch(setLoading());
  }
);
export const updateCartItem = createAsyncThunk(
  '/cart/update',
  async (payLoad: { cartId: number; payload: CartPayLoad }, { dispatch }) => {
    await cartApi.updateCartItem(payLoad.cartId, payLoad.payload);
    dispatch(setLoading());
  }
);
export const removeCartItem = createAsyncThunk(
  '/cart/delete',
  async (payLoad: number, { dispatch }) => {
    await cartApi.deleteCartItem(payLoad);
    dispatch(setLoading());
  }
);
export const removeCartItems = createAsyncThunk(
  '/cart/deletes',
  async (payLoad: { ids: number[] }, { dispatch }) => {
    await cartApi.deleteCartItems(payLoad);

    dispatch(setLoading());
  }
);

export const { setLoading, setSelectedList } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

const cartReducer = cartSlice.reducer;
export default cartReducer;
