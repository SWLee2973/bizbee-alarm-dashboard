import React from "react";
import { Logo } from "../svgIcons";
import Link from "next/link";

function BizbeeLogo() {
  return (
    <Link
      href="/"
      className="fit-content flex max-[512px]:hidden items-center gap-x-3 md:px-4 max-md:px-2 max-md:py-1 md:my-4"
    >
      <Logo className="size-11" />
      <h1 className="flex flex-col">
        <strong className="md:text-xl max-md:text-md font-bold">Bizbee</strong>
        <span className="md:text-sm max-md:text-xs font-semibold text-nowrap">
          알림 대시보드
        </span>
      </h1>
    </Link>
  );
}

export default BizbeeLogo;
