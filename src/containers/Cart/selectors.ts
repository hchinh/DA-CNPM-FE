import { CartItem } from 'interfaces';
import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state: any) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count: number, item: CartItem) => count + item.quantity, 0)
);

export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total: number, item: CartItem) => total + item.salePrice * item?.quantity, 0)
);
