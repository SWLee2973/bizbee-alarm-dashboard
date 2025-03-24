import { IProjectMetricsResponse } from "@/types";
import { api } from "../utils";

export async function fetchProjects() {
  try {
    const response = await api.get<IProjectMetricsResponse>(
      "/dashboard/metrics"
    );

    return response;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Error fetching projects");
  }
}
