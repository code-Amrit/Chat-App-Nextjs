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
  userId: string;
  fullName: string;
  email: string;
  oAuthToken: string;
  refreshToken: string;
  message?: string;
}