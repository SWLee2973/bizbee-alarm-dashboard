"use client";

import { links } from "@/lib";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function ProjectsMainPageNavigator() {
  const pathname = usePathname();
  const linkList = links.find((link) => link.href === "/projects")?.children;

  if (!linkList?.some((link) => link.href === pathname)) return null;

  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpened(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (isOpened) {
      gsap.to(".navigator", {
        width: "auto",
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(".navigator", {
        width: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [isOpened]);

  return (
    <nav className="md:hidden flex justify-end sticky top-22 z-1">
      <div className="flex rounded-md p-1 bg-base-300 shadow-xl">
        <ul className="navigator flex gap-x-2 overflow-hidden">
          {linkList?.map((link) => (
            <li
              key={link.name}
              className={clsx("rounded-md p-2 whitespace-nowrap", {
                "bg-primary": pathname === link.href,
                "hover:bg-accent": pathname !== link.href,
              })}
            >
              <Link href={link.href} onClick={() => setIsOpened(false)}>
                <span
                  className={clsx({
                    "text-primary-content": pathname === link.href,
                  })}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <label role="button" className="swap swap-rotate px-1.5">
          <input
            type="checkbox"
            checked={isOpened}
            onChange={() => setIsOpened(!isOpened)}
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default ProjectsMainPageNavigator;
