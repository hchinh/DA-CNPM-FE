export interface CartItem {
  id: number;
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  customerId: number;
  productId: number;
  quantity: number;
  salePrice: number;
  productName: string;
  productThumbnail: string;
}

export interface CartPayLoad {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  customerId: number;
  productId: number;
  quantity: number;
  salePrice: number;
}
