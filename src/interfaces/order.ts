import { number } from 'yup';

enum OrderStatus {
  PENDING,
  COMPLETED,
  REFUNDED,
  CANCELLED,
  DECLINED,
  PAID,
}

enum PaymentMethod {
  CASH,
  PAYPAL,
}

export interface Order {
  id: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  userId: number;
  note: string;
  totalCost: number;
  address: string;
  orderItems: OrderItem[];
  status: OrderStatus;
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
