import { useQuery } from "@tanstack/react-query";
import { api } from "../utils";
import { IProjectsListResponse } from "@/types";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get<IProjectsListResponse[]>(
        "/dashboard/projects"
      );

      return response;
    },
  });
};
