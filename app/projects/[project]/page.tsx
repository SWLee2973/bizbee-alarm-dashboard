"use client";

import { useParams } from "next/navigation";
import React from "react";

function ProjectPage() {
  const { project } = useParams();
  return <div>{project}</div>;
}

export default ProjectPage;
