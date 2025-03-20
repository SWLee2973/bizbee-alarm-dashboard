"use client";

import DashboardDatePicker from "@/components/dashboard/DashboardDatePicker";
import ProjectsCountCard from "@/components/dashboard/ProjectsCountCard";
import SendStatusCard from "@/components/dashboard/SendStatusCard";
import TotalSendCountCard from "@/components/dashboard/TotalSendCountCard";
import dayjs from "dayjs";
import { useState } from "react";
import { DateRange } from "react-day-picker";

function DashboardPage() {
  const [searchDate, setSearchDate] = useState<DateRange>({
    from: dayjs().subtract(1, "month").toDate(),
    to: dayjs().toDate(),
  });

  return (
    <main className="flex-1 flex flex-col gap-y-4">
      <div className="flex justify-between">
        <h2 className="ps-2 text-lg font-semibold">대시보드</h2>
        <DashboardDatePicker dateRange={searchDate} onChange={setSearchDate} />
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <ProjectsCountCard />
        <ProjectsCountCard />
      </div>
      <SendStatusCard />
    </main>
  );
}

export default DashboardPage;
