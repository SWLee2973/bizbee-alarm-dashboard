import React from "react";

interface IPageHeaderProps {
  title: string;
}

function PageHeader({ title }: IPageHeaderProps) {
  return (
    <h2 className="ps-2 text-lg font-semibold mt-4 md:sr-only">{title}</h2>
  );
}

export default PageHeader;
