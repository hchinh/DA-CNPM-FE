import { Cart } from './cart';
import { Product } from './product';

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
