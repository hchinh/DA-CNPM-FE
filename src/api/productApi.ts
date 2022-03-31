import { Product } from 'interfaces/product';
import queryString from 'query-string';
import { ListResponse } from './../interfaces/common';
import axiosClient from './axiosClient';

const productApi = {
  async getAll(params: any): Promise<ListResponse<Product>> {
    const query: string = queryString.stringify(params);
    const data: any = await axiosClient.get(`/products?${query}`);
    return {
      data: data.content,
      pagination: {
        page: params?.page + 1,
        limit: params?.limit,
        total: data.totalElements,
      },
    };
  },
  async get(id: number) {
    const url = `/products/${id}`;
    const data: Product = await axiosClient.get(url);
    return { data };
  },
};
export default productApi;
