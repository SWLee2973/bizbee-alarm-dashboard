import { sendCountData } from "@/lib";
import Link from "next/link";
import RollingNumber from "../ui/RollingNumber";

async function ProjectsCountCard() {
  // const data = await fetchProjects();
  return (
    <section className="card bg-base-100 h-fit card-md flex-1 shadow-sm rounded-md">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top text-nowrap">
          관리중인 서비스
        </h3>
        <div className="flex justify-end">
          <Link href="/projects" className="text-xl font-semibold">
            {/* <RollingNumber value={data.projectMetrics.length} suffix="개" /> */}
            <RollingNumber
              value={sendCountData.projectMetrics.length}
              suffix="개"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCountCard;
