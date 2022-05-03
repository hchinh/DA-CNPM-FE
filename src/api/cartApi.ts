import { CartPayLoad } from './../interfaces/cart';
import { CartItem, ListResponse, ListParams, ApiResponse } from 'interfaces';
import axiosClient from './axiosClient';

const cartApi = {
  async getByUserId(userId: number, params: ListParams): Promise<ListResponse<CartItem>> {
    const data: ApiResponse<CartItem> = await axiosClient.get(`/cartTemps/customers/${userId}`, {
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
  async updateCartItem(cartId: number, payload: CartPayLoad) {
    await axiosClient.put(`/cartTemps/${cartId}`, { ...payload });
  },
  async addCartItem(payload: CartPayLoad) {
    await axiosClient.post(`/cartTemps`, { ...payload });
  },
  async deleteCartItem(cartId: number) {
    await axiosClient.delete(`/cartTemps/${cartId}`);
  },
  async deleteCartItems(cartIds: { ids: number[] }) {
    await axiosClient.post(`/cartTemps/deletes`, { ...cartIds });
  },
};

export default cartApi;
