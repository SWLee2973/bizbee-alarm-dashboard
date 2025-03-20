import { api, fetchProjects } from "@/lib";
import Link from "next/link";
import React from "react";

interface IProjectsListResponse {
  project: string;
}

async function ProjectsCountCard() {
  const data = await fetchProjects();
  // const { data } = useProjects();
  // const data = await api.get<IProjectsListResponse[]>("/dashboard/projects");
  return (
    <section className="card bg-base-200 h-fit card-md flex-1 shadow-sm rounded-md min-w-0">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top whitespace-pre-line break-words overflow-wrap-break-word max-w-full">
          등록된 서비스
        </h3>
        <Link href="/projects" className="flex justify-end">
          <span className="text-2xl font-semibold underline">
            {data?.length} 개
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ProjectsCountCard;
