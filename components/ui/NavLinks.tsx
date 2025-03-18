"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "@/lib";

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="menu md:w-full flex gap-3 md:menu-vertical max-md:menu-horizontal rounded-md">
      {links.map((link) => {
        const className = clsx("md:w-full md:h-10 rounded-md", {
          "bg-primary": pathname === link.href,
        });

        return (
          <li key={link.name} className={className}>
            <Link
              href={link.href}
              className="flex size-full rounded-md justify-center items-center"
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
