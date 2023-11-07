import { useQuery } from "@tanstack/react-query";
import Language from "../models/Language";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Language[]>("/api/languages");

const useLanguage = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: apiClient.get,
  });
};


export default useLanguage;
