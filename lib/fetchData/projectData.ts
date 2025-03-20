import { IProjectsListResponse } from "@/types";
import { api } from "../utils";
import { getSession } from "../serverActions";

export async function fetchProjects() {
  try {
    const response = await api.get<IProjectsListResponse[]>(
      "/dashboard/projects"
    );

    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Error fetching projects");
  }
}
