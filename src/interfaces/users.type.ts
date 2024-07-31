export interface IStateInit {
  results: IResults[] | null;
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface ILogin {
  md5?: string;
  password?: string;
  salt?: string;
  sha1?: string;
  sha256?: string;
  username: string;
  uuid?: string;
}

export interface IPicture {
  large?: string;
  medium?: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  nat: string;
  name: IName;
  login: ILogin;
  picture: IPicture;
}

export interface IResults {
  results: IUser[];
  info: {
    page: number;
    results: number;
    seed: string;
  };
}

export interface ISearchEvent extends Event {
  target: HTMLInputElement;
}