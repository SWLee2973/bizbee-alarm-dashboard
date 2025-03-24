import ProjectsMainPageNavigator from "@/components/projects/ProjectsMainPageNavigator";
import React from "react";

interface IProjectsMainPageLayoutProps {
  children: React.ReactNode;
}

function ProjectsMainPageLayout({ children }: IProjectsMainPageLayoutProps) {
  return (
    <div className="max-md:min-w-[360px] max-md:absolute max-md:inset-4 max-md:pt-18 flex flex-col gap-y-4">
      <ProjectsMainPageNavigator />
      {children}
    </div>
  );
}

export default ProjectsMainPageLayout;
