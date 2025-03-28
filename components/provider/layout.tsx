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
      <div className="flex flex-1 md:py-4 max-md:pb-4 max-md:min-h-[calc(100svh-96px)] max-md:ps-4 flex-col">
        <Header />
        <div
          ref={scrollableRef}
          className="overflow-auto scrollbar overscroll-contain md:pb-1 md:pe-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
