import { ChangePasswordPayload, RegisterPayLoad, User } from 'interfaces';
import axiosClient from './axiosClient';
export const userApi = {
  async getById(id: number): Promise<User> {
    return await axiosClient.get(`/customers/${id}`);
  },
  update(id: number, data: RegisterPayLoad) {
    return axiosClient.put(`/customers/${id}`, data);
  },
  changePassword(payload: ChangePasswordPayload) {
    return axiosClient.post('/password/edit', payload);
  },
};
