import { useQuery } from "@tanstack/react-query";
import { IProjectsListResponse } from "../types";
import api from "../utils/api";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get<IProjectsListResponse[]>("/projects");

      return response;
    },
  });
};
