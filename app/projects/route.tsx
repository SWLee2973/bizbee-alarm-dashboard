import { redirect } from "next/navigation";

export function GET() {
  redirect("/projects/project-list");
}
