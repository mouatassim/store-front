import { useQuery } from "@tanstack/react-query";
import { BookInfos } from "../models/Book";
import APIClient from "../services/api-client";

const apiClient = new APIClient<BookInfos[]>("/api/books");

const useBooksList = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: apiClient.get,
  });
};

export default useBooksList;
