interface User {
    name: string;
  }
interface GetAllUsersResponse {
    message: string;
    All_Users: User[];
  }

interface registerUserRequest{
  name: string;
  email: string;
  password: string;
}

interface loginUserRequest{
  email: string;
  password: string;
}

 interface LoginResponse {
  message: string;
  token: string;
  user: Userinfo;
}

 interface Userinfo {
  id: string;
  name: string;
  email: string;
}