import { Category } from 'interfaces';
import { ListResponse } from './../interfaces/common';
import axiosClient from './axiosClient';
const categoryApi = {
  async getAll(): Promise<ListResponse<Category>> {
    const data: any = await axiosClient.get('/categories');
    return {
      data,
      pagination: {
        page: 1,
        limit: 2,
        total: 1,
      },
    };
  },
  async get(id: number) {
    const url = `/categories/${id}`;
    const data: Category = await axiosClient.get(url);
    return { data };
  },
};

export default categoryApi;
