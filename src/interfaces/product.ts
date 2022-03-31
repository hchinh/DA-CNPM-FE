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
  id?: Number;
  createDate?: String;
  modifiedDate?: String;
  createdBy?: String;
  name?: String;
  description?: String;
  thumbnail?: String;
}
