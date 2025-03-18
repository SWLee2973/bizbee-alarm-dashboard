import { links } from "@/lib";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function DropdownNavLinks() {
  const pathname = usePathname();

  return (
    <div className="dropdown dropdown-start md:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent border-none"
      >
        <RxHamburgerMenu size={24} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content flex flex-col gap-y-1 menu bg-base-300 rounded-md z-1 w-48 p-2 mt-5 -ms-1 shadow-sm"
      >
        {links.map((link) => {
          const className = clsx("md:w-full md:h-10 rounded-md", {
            "bg-primary": pathname === link.href,
          });

          return (
            <li key={link.name} className={className}>
              <Link
                href={link.href}
                className="flex size-full rounded-md items-center"
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
    </div>
  );
}

export default DropdownNavLinks;
