import { Brand } from 'interfaces';
import axiosClient from './axiosClient';
const brandApi = {
  async getAll(): Promise<Brand[]> {
    return await axiosClient.get('/brands');
  },
};

export default brandApi;
