export interface IUser {
  userId: string;
  name: string;
  role: string;
}

export interface IUserTableRow extends IUser {
  No: number;
}
