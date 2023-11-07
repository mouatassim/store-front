import { useQuery } from "@tanstack/react-query";
import Genre from "../models/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre[]>("/api/genres");

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.get,
  });
};


export default useGenre;
