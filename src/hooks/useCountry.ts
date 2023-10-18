import { useQuery } from "@tanstack/react-query";
import { Country } from "../models/Country";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Country[]>("/api/countries");

const useCountry = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: apiClient.get,
  });
};


export default useCountry;
