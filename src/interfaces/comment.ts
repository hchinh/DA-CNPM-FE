import { ListParams } from './common';

export interface Comment {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  comment: string;
  productId: number;
  customerId: number;
}

export interface CommentPayload extends ListParams {
  productId: number;
}
