"use client";

import React, { useRef } from "react";
import NavBar from "../ui/NavBar";
import Header from "../ui/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent) => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop += event.deltaY;
    }
  };

  return (
    <div
      className="flex-1 md:flex h-screen min-w-[360px] max-md:h-fit"
      onWheel={handleWheel}
    >
      <NavBar />
      <div
        ref={scrollableRef}
        className="flex flex-1 overscroll-contain overflow-auto pb-4 max-md:h-100svh max-md:px-4 flex-col"
      >
        <Header />
        <div className="flex-1 md:pe-4.5 md:ps-0.5">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
