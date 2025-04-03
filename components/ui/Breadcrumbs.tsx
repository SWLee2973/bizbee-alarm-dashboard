import { links } from "@/lib";
import { findBreadcrumbs } from "@/lib/utils/breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = useMemo(
    () => findBreadcrumbs(links, pathname),
    [pathname]
  );

  if (!breadcrumbs) return <div />;

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
