export interface User {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  dob: {
    date: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
}
