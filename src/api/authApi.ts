import { AuthResponse, LoginPayload, User } from 'interfaces';
import axiosClient from './axiosClient';
export const authApi = {
  login(payload: LoginPayload): Promise<AuthResponse> {
    const url = '/auth/signin';
    return axiosClient.post(url, payload);
  },
  register(data: User) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },
};
