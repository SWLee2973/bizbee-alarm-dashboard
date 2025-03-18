import React from "react";
import { Logo } from "../svgIcons";

function BizbeeLogo() {
  return (
    <div className="fit-content flex items-center gap-x-3 md:px-4 max-md:px-2 max-md:py-1 md:my-4">
      <Logo width="44px" height="44px" />
      <h1 className="flex flex-col">
        <strong className="md:text-xl max-md:text-md font-bold">Bizbee</strong>
        <span className="md:text-sm max-md:text-xs font-semibold">
          메시지 대시보드
        </span>
      </h1>
    </div>
  );
}

export default BizbeeLogo;
