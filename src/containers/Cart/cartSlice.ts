import { CartItem } from './../../interfaces/cartItem';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state: any, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x: CartItem) => x.product.id === newItem.product.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state: any, action) {
      const { productId, quantity } = action.payload;
      const index = state.cartItems.findIndex((x: CartItem) => x.product.id === productId);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x: CartItem) => x.product.id !== idNeedToRemove);
    },

    resetCart(state) {
      state.cartItems = [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, setQuantity, removeFromCart, resetCart } = actions;
export default reducer;
