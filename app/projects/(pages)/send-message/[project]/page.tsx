import { useParams } from "next/navigation";
import React from "react";

function SendMessagePage() {
  const { project } = useParams();

  return <div>{project}</div>;
}

export default SendMessagePage;
