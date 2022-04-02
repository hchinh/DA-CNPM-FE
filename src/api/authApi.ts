import { AuthResponse, LoginPayload, RegisterPayLoad } from 'interfaces';
import axiosClient from './axiosClient';
export const authApi = {
  login(payload: LoginPayload): Promise<AuthResponse> {
    const url = '/auth/signin';
    return axiosClient.post(url, payload);
  },
  register(data: RegisterPayLoad) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },
};
