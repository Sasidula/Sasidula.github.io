import { useQuery } from "@tanstack/react-query";
import { getGithubData, type GithubData } from "../services/github";

export function useGithub() {
  return useQuery<GithubData>({
    queryKey: ["github"],
    queryFn: getGithubData,
    staleTime: 1000 * 60 * 30,
  });
}