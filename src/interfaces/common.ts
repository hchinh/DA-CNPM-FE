export enum ROLES {
  EMPLOYEE = 'ROLE_EMPLOYEE',
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  type: 'Bearer';
  role: ROLES;
}

export type RefreshTokenRespone =
  | AuthResponse
  | {
      message: string;
      status: string;
      timestamp: string;
    };

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  content: T[];
  number: number;
  size: number;
  totalElements: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  limit?: number;
  sort?: string;

  [key: string]: any;
}
