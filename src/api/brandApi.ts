import { Brand } from 'interfaces';
import { ListResponse } from './../interfaces/common';
import axiosClient from './axiosClient';
const brandApi = {
  async getAll(): Promise<ListResponse<Brand>> {
    const data: any = await axiosClient.get('/brands');
    return {
      data,
      pagination: {
        page: 1,
        limit: 2,
        total: 1,
      },
    };
  },
};

export default brandApi;
