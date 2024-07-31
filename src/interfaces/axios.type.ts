interface IUserName {
  title: string;
  first: string;
  last: string;
}

interface IUserLogin {
  username: string;
}

interface IUserPicture {
  thumbnail: string;
}

interface IUser {
  name: IUserName;
  login: IUserLogin;
  picture: IUserPicture;
}
export interface IApiResponse {
  results: IUser[];
  info: {
    page: number;
    results: number;
  };
}

export interface IErrorResponse {
  data?: any;
  status?: number;
  headers?: any;
}