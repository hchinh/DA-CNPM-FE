import { RefreshTokenPayLoad, LogoutPayLoad } from './../interfaces/auth';
import { RefreshTokenRespone } from './../interfaces/common';
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
  
  checkToken(payLoad: RefreshTokenPayLoad): Promise<RefreshTokenRespone> {
    const url = '/auth/refreshtoken';
    return axiosClient.post(url, payLoad);
  },
  logout(payLoad: LogoutPayLoad) {
    const url = '/auth/logout';
    return axiosClient.post(url, payLoad);
  },
};
