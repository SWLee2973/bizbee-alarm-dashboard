import ProjectsCountCard from "@/components/dashboard/ProjectsCountCard";
import SendFailCountCard from "@/components/dashboard/SendFailCountCard";
import SendSuccessCountCard from "@/components/dashboard/SendSuccessCountCard";
import TotalSendCountCard from "@/components/dashboard/TotalSendCountCard";
import React from "react";

function ProjectPage() {
  return (
    <div className="pb-4">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <SendSuccessCountCard />
        <SendFailCountCard />
        <ProjectsCountCard />
        <TotalSendCountCard />
        <SendSuccessCountCard />
        <SendFailCountCard />
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <SendSuccessCountCard />
        <SendFailCountCard />
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <SendSuccessCountCard />
        <SendFailCountCard />
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4">
        <ProjectsCountCard />
        <TotalSendCountCard />
        <SendSuccessCountCard />
        <SendFailCountCard />
      </div>
    </div>
  );
}

export default ProjectPage;
