"use client";

import { useProjects } from "@/lib";
import Link from "next/link";

function ProjectsCard() {
  // const { data, isLoading } = useProjects();

  return (
    <section className="card bg-base-100 card-md shadow-lg rounded-md">
      <div className="card-body">
        <h2 className="card-title text-lg">앱</h2>

        <div className="justify-end card-actions">
          <Link href="/management/add-project" className="btn btn-primary">
            앱 추가
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCard;
