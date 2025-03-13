import { IAppsListResponse } from "@/types/apps-type";
import { api } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useApps = () => {
  return useQuery({
    queryKey: ["apps"],
    queryFn: async () => {
      const response = await api.get<IAppsListResponse[]>("/apps");

      return response;
    },
  });
};
