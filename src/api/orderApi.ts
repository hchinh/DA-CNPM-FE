import { PaymentPayload } from './../interfaces/order';
import axiosClient from './axiosClient';
export const orderApi = {
  async payment(payload: PaymentPayload) {
    const response = await axiosClient.post('/carts', { ...payload });
    return response;
  },
};
