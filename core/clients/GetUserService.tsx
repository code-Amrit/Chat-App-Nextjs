// src/services/ip-location.service.ts

import { httpGet, httpPost } from "@/core/clients/http";


export const getUser = {
  getUser: () =>
    httpGet<GetAllUsersResponse>("/auth/allUser"),

  registerUser: (payload: registerUserRequest) =>
    httpPost<{ success: boolean }>("/auth/register", payload),

  loginUser: (payload: loginUserRequest) =>
    httpPost<LoginResponse>("/auth/login", payload),
};