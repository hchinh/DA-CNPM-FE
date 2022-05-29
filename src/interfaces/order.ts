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
export interface CancelPayload {
  userId: number;
  status: Status;
}
export interface OrderCartItem {
  id: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  quantity: number;
  salePrice: number;
  cardId: number;
  productId: number;
  productName: string;
  productThumbnail: string;
}

export interface Order {
  id: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  note?: string;
  totalCost: number;
  address: string;
  status: Status;
  paymentMethod: PaymentMethod;
  customerName: string;
  cartItems: OrderCartItem[];
  customerId: number;
}
