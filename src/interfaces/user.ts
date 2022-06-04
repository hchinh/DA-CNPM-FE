export interface User {
  id: number;
  createdDate: string;
  modifiedDate: string;
  createdBy: string;
  modifiedBy: string;
  userName: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  gender: number;
  profilePicture: string;
  enabled: number;
}

export interface ChangePasswordPayload {
  email: string;
  oldPassword: string;
  password: string;
}
