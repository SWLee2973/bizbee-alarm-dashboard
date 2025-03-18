"use client";

import { useProjects } from "@/lib";
import Link from "next/link";
import React from "react";

function ProjectsCountCard() {
  const { data } = useProjects();

  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <div className="card-body">
        <h3 className="card-title text-md">
          등록된 서비스{" "}
          <Link href="/projects">
            <strong className="font-bold underline">{data?.length}</strong>
          </Link>{" "}
          개
        </h3>
      </div>
    </section>
  );
}

export default ProjectsCountCard;
