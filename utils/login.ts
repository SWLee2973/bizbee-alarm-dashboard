import { User } from "next-auth";
import api from "./api";
import { ILoginParams } from "@/types/auth-type";

const login = async (params: ILoginParams): Promise<User> => {
  const res = await fetch(
    `http://localhost:3001/users/?userId=${params.userId}&password=${params.password}`
  );

  const user = await res.json();

  // const response = await api.post<User, ILoginParams>("/users/login", {
  //   body: params,
  // });

  // return response.data;

  return user[0];
};

export default login;
