import { useQuery } from "@tanstack/react-query";
import { api } from "../utils";
import { IProjectMetricsResponse } from "@/types";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get<IProjectMetricsResponse>(
        "/dashboard/projects"
      );

      return response;
    },
  });
};
