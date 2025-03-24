"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "@/lib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { IRoute } from "@/types";

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="md:w-full flex gap-y-2 max-md:menu md:menu-vertical max-md:menu-horizontal rounded-md">
      {links.map((link) => (
        <NavLinkItem key={link.name} link={link} pathname={pathname} />
      ))}
    </ul>
  );
}

function NavLinkItem({ link, pathname }: { link: IRoute; pathname: string }) {
  const submenuRef = useRef(null);
  const submenuItemRef = useRef(null);

  const isActive =
    pathname === link.href || pathname.startsWith(link.href + "/");

  useGSAP(() => {
    if (isActive && link.children) {
      gsap.to(submenuRef.current, {
        height: "auto",
        padding: "4px",
        rowGap: "4px",
        duration: 0.5,
        ease: "power4.in",
      });
    } else {
      gsap.to(submenuRef.current, {
        height: 0,
        padding: 0,
        rowGap: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [isActive, link.children]);

  return (
    <li
      className={clsx(
        "flex flex-col md:w-full p-2 items-center rounded-md",
        {
          "bg-primary gap-y-2": isActive,
        },
        {
          "hover:bg-base-200 hover:text-base-content": !isActive,
        }
      )}
    >
      <Link
        href={link.href}
        className="flex size-full rounded-md justify-center items-center"
      >
        <p
          className={clsx("font-semibold", {
            "text-primary-content": isActive,
          })}
        >
          {link.name}
        </p>
      </Link>
      {link.children && (
        <ul
          ref={submenuRef}
          className="submenu overflow-hidden h-0 flex-col bg-base-100 w-full items-center rounded-md"
        >
          {link.children.map((child) => (
            <li
              ref={submenuItemRef}
              key={child.name}
              className={clsx("flex py-2 w-full rounded-md", {
                "bg-secondary": pathname === child.href,
                "hover:bg-accent": pathname !== child.href,
              })}
            >
              <Link
                href={child.href}
                className={clsx("text-sm w-full text-center font-semibold", {
                  "text-primary-content": pathname === child.href,
                })}
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavLinks;
