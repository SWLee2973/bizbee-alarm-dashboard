"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="menu md:w-full md:menu-vertical max-md:menu-horizontal bg-base-200 rounded-lg">
      {links.map((link) => {
        const className = clsx("md:w-full md:h-10 rounded-lg", {
          "bg-primary": pathname === link.href,
        });

        return (
          <li key={link.name} className={className}>
            <Link
              href={link.href}
              className="flex size-full rounded-lg justify-center items-center"
            >
              <p
                className={clsx("font-semibold", {
                  "text-primary-content": pathname === link.href,
                })}
              >
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
