import ServiceRegistrationStatusCard from "@/components/dashboard/ServiceRegistrationStatusCard";
import ProjectsCountCard from "@/components/dashboard/ProjectsCountCard";
import RecentSendMessageCard from "@/components/dashboard/RecentSendMessageCard";
import SendFailCountCard from "@/components/dashboard/SendFailCountCard";
import SendStatusCard from "@/components/dashboard/SendStatusCard";
import SendSuccessCountCard from "@/components/dashboard/SendSuccessCountCard";
import TotalSendCountCard from "@/components/dashboard/TotalSendCountCard";
import PageHeader from "@/components/ui/PageHeader";

function DashboardPage() {
  return (
    <main className="flex-1 flex flex-col gap-y-4">
      <PageHeader title="대시보드" />
      <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-4">
        <ServiceRegistrationStatusCard />
        <ServiceRegistrationStatusCard />
        <ServiceRegistrationStatusCard />
        <ServiceRegistrationStatusCard />
        <ServiceRegistrationStatusCard />
        <ServiceRegistrationStatusCard />
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
