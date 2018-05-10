export interface User {
  id: number;
  last_login: Date;
  name: string;
  username: string;
  email: string;
  phone: string;
  customer: number;
  role: number;
  outlets: Array<number>;
}
