import { CartItem } from './cartItem';
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
