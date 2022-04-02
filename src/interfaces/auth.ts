export interface LoginPayload {
  userName: string;
  password: string;
}

export interface RegisterPayLoad {
  email: string;
  password: string;
  userName: string;
  name: string;
  phoneNumber: string;
  gender: 1 | 2 | 3;
  address?: string;
  profilePicture?: string;
}
