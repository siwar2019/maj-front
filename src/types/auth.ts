export interface IloginUser {
  email: string;
  password: string;
  rememberMe?: boolean;
}
export interface IForgotPwd {
  email: string;
}
export interface ResetPwd {
  newPassword: string;
}

export interface ICurrentUser {
  email: string;
  role: string;
}
export interface Data {
  data: [];
  message: string;
  success: boolean;
}
export interface ResponseError {
  data: Data;
  status: number;
}

export interface Error {
  response: ResponseError;
}

export interface IChangePwd {
  password: string;
  newPassword: string;
}
