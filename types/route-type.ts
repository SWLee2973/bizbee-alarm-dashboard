export type IRoute = {
  name: string;
  href: string;
  children?: IRoute[];
};
