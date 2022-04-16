import { ApiResponse, ListParams, ListResponse, Product } from 'interfaces';
import axiosClient from './axiosClient';

const productApi = {
  async getAll(params: ListParams): Promise<ListResponse<Product>> {
    const data: ApiResponse<Product> = await axiosClient.get('/products', { params });

    return {
      data: data.content,
      pagination: {
        page: data.number,
        limit: data.size,
        total: data.totalElements,
      },
    };
  },

  getById(id: number): Promise<Product> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
