import { ListParams } from './common';
import { User } from './user';

export interface Comment {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  comment: string;
  productId: number;
  customer: User;
  customerId: number;
}

export interface CommentPayload extends ListParams {
  productId: number;
}

export interface FeedBackPayload {
  rating: number;
  productId: number;
  customerId: number;
}
