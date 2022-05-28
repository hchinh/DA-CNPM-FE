export enum Status {
  PENDING,
  COMPLETED,
  REFUNDED,
  CANCELLED,
  DECLINED,
  PAID,
}

export enum PaymentMethod {
  CASH,
  PAYPAL,
}

export interface PaymentPayload {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  customerId: number;
  note?: string;
  totalCost: number;
  address: string;
  status: Status;
  paymentMethod: PaymentMethod;
}

export interface OrderItem {
  id: number;
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  quantity: number;
  salePrice: number;
  customerId: number;
  productId: number;
  productName: string;
  productThumbnail: string;
}
