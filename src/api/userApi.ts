import { User } from 'interfaces';
import axiosClient from './axiosClient';
export const userApi = {
  async getById(id: number): Promise<User> {
    return await axiosClient.get(`/customers/${id}`);
  },
};
