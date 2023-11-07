import { useQuery } from "@tanstack/react-query";
import Author from "../models/Author";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Author[]>("/api/authors");

const useAuthor = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: apiClient.get,
  });
};


export default useAuthor;
