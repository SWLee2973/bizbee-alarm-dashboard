import ProjectsCountCard from "@/components/dashboard/ProjectsCountCard";
import SendCountCard from "@/components/dashboard/SendCountCard";
import ProjectsCard from "@/components/projects/ProjectsCard";

async function DashboardPage() {
  return (
    <main className="flex-1 flex flex-col gap-y-4">
      <h2 className="ps-2 text-lg font-semibold">대시보드</h2>
      <ProjectsCountCard />
      <SendCountCard />
    </main>
  );
}

export default DashboardPage;
