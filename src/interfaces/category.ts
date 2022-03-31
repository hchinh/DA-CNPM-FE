import { number } from 'yup';

export interface Category {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  name: string;
  sescription?: string;
  thumbnail?: string;
}
