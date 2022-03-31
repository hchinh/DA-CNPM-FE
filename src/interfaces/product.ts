export interface Product {
  id?: number;
  createdDate?: String | null;
  modifiedDate?: String | null;
  createdBy?: String | null;
  modifiedBy?: String | null;
  name: string;
  brand?: string;
  shortDescription?: string;
  description: string;
  price: number;
  unitInStock: number;
  thumbnail?: string;
  categoryId: number;
}
