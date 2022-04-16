import { Category } from 'interfaces';
import axiosClient from './axiosClient';
const categoryApi = {
  async getAll(): Promise<Category[]> {
    return await axiosClient.get('/categories');
  },
  async get(id: number) {
    const url = `/categories/${id}`;
    const data: Category = await axiosClient.get(url);
    return { data };
  },
};

export default categoryApi;
