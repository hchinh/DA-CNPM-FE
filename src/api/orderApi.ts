import { ListResponse } from './../interfaces/common';
import { ApiResponse, ListParams } from 'interfaces';
import { CancelPayload, Order, PaymentPayload } from './../interfaces/order';
import axiosClient from './axiosClient';
export const orderApi = {
  async payment(payload: PaymentPayload) {
    const response = await axiosClient.post('/carts', { ...payload });
    return response;
  },
  async getApi(customerId: number, params: ListParams): Promise<ListResponse<Order>> {
    const data: ApiResponse<Order> = await axiosClient.get(`/carts/customers/${customerId}`, {
      params,
    });
    return {
      data: data.content,
      pagination: {
        page: data.number,
        limit: data.size,
        total: data.totalElements,
      },
    };
  },

  async cancel(id: number, payload: CancelPayload) {
    await axiosClient.put(`/carts/status/${id}`, { ...payload });
  },
};
