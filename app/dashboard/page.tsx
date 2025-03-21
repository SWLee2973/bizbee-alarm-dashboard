import DashboardDatePicker from "@/components/dashboard/DashboardDatePicker";
import ProjectsCountCard from "@/components/dashboard/ProjectsCountCard";
import RecentSendMessageCard from "@/components/dashboard/RecentSendMessageCard";
import SendStatusCard from "@/components/dashboard/SendStatusCard";
import TotalSendCountCard from "@/components/dashboard/TotalSendCountCard";

function DashboardPage() {
  return (
    <main className="flex-1 flex flex-col gap-y-4">
      <div className="flex justify-between">
        <h2 className="ps-2 text-lg font-semibold">대시보드</h2>
        {/* <DashboardDatePicker /> */}
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <ProjectsCountCard />
        <ProjectsCountCard />
      </div>
      <div className="grid grid-cols-2 lg:grid-rows-1 max-lg:grid-cols-1 gap-4">
        <SendStatusCard />
        <RecentSendMessageCard />
      </div>
      <div className="grid grid-cols-2 lg:grid-rows-1 max-lg:grid-cols-1 gap-4">
        <SendStatusCard />
        <RecentSendMessageCard />
      </div>
    </main>
  );
}

export default DashboardPage;
