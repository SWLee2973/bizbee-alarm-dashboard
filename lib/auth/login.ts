import { User } from "next-auth";
import { ILoginParams } from "@/types";

const login = async (params: ILoginParams): Promise<User | null> => {
  console.log('login_params : ', params);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );

  if (!response.ok) {
    return null;
  }

  const user = (await response.json()) as User;

  return user;
};

export default login;
