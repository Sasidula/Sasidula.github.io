import { useQuery } from "@tanstack/react-query";
import {
  getGithubData,
  type GithubData,
} from "../services/github";


export function useGithub() {
  return useQuery<GithubData>({
    queryKey: ["github"],

    queryFn: getGithubData,

    // Worker cache = 24h
    // React cache = 24h
    staleTime:
      1000 *
      60 *
      60 *
      24,

    // keep cached data for 7 days
    gcTime:
      1000 *
      60 *
      60 *
      24 *
      7,

    retry: 2,
  });
}