export interface Product {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  name: string;
  brand?: string;
  shortDescription?: string;
  description: string;
  price: number;
  unitInStock: number;
  thumbnail?: string;
  categoryId: number;
  ratingAverage: number;
  discount: number;
}

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

export interface Brand {
  id?: number;
  createDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
}
