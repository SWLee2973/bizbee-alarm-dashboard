import { User } from "next-auth";
import { api } from "../utils";
import { ILoginParams } from "@/types";

const login = async (params: ILoginParams): Promise<User> => {
  const response = await api.post<User, ILoginParams>("/auth/login", {
    needAuth: false,
    body: params,
  });

  return response;
};

export default login;
