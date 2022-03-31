import { User } from 'interfaces/user';
import axiosClient from './axiosClient';
export const userApi = {
  login(data: { username: string; password: string }) {
    const url = '/auth/signin';
    return axiosClient.post(url, data);
  },
  register(data: User) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },
};
