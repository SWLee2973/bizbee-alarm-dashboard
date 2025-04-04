import { z } from "zod";

export const userSchema = z.object({
  userId: z
    .string()
    .nonempty("아이디를 입력해주세요.")
    .regex(
      /^[a-z0-9]{4,30}$/,
      "영문 소문자 또는 영문+숫자 조합 4~30자리를 입력해주세요."
    ),
  password: z
    .string()
    .nonempty("비밀번호를 입력해주세요.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,15}$/,
      "영문+숫자+특수문자(! @ # $ % & * ?) 조합 6~15자리를 입력해주세요."
    ),
  passwordConfirm: z.string().nonempty("비밀번호를 다시 입력해주세요."),
  name: z.string().nonempty("이름을 입력해주세요."),
  role: z.string().optional(),
});

export type UserFormType = z.infer<typeof userSchema>;
