import { Product } from './product';
import { User } from './user';

export interface Cart {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  user?: User;
  note?: string;
  totalCost?: number;
  address?: string;
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  cart: Cart;
  product: Product;
  quantity: number;
  status: number;
}
