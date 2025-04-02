import { usePathname } from "next/navigation";
import Link from "next/link";
import { IRoute } from "@/types";
import { links } from "@/lib";

function Breadcrumbs() {
  const pathname = usePathname();

  const findBreadcrumbs = (routes: IRoute[], path: string): IRoute[] | null => {
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

  const breadcrumbs = findBreadcrumbs(links, pathname);

  if (!breadcrumbs) return null;

  return (
    <nav
      aria-label="breadcrumb"
      className="breadcrumbs font-semibold items-center flex ps-3"
    >
      <ul>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href}>
            <Link href={crumb.href}>{crumb.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
