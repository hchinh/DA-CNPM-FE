export enum ROLES {
  EMPLOYEE = 'ROLE_EMPLOYEE',
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
}

export interface AuthResponse {
  id: string;
  username: string;
  email: string;
  token: string;
  type: 'Bearer';
  role: ROLES;
}

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
