// src/services/ip-location.service.ts

import { httpGet, httpPost } from "@/core/clients/http";


export const getUser = {
  getUser: () =>
    httpGet<GetAllUsersResponse>("/auth/allUser"),

//   saveIpLog: (payload: { ip: string }) =>
//     httpPost<{ success: boolean }>("/web/api/ip-location", payload),
};