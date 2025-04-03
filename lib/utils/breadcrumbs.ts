import { IRoute } from "@/types";

export const findBreadcrumbs = (
  routes: IRoute[],
  path: string
): IRoute[] | null => {
  for (const route of routes) {
    if (route.href === path) {
      return [route];
    }
    if (route.children) {
      const childBreadcrumbs = findBreadcrumbs(route.children, path);
      if (childBreadcrumbs) {
        return [route, ...childBreadcrumbs];
      }
    }
  }
  return null;
};
