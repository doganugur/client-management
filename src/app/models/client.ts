import { Cname } from './cname';
import { Clocation } from './clocation';
import { Clogin } from './clogin';
import { Cid } from './cid';
import { Cpicture } from './cpicture';

export class Client {
  gender: string;
  name: Cname;
  location: Clocation;
  email: string;
  login: Clogin;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: Cid;
  picture: Cpicture;
  nat: string;
}
export class ClientFilterFields {
  firstName: string;
  lastName: string;
}
