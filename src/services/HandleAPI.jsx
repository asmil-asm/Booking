// src/services/HandleAPI.ts
import { useQuery } from "@tanstack/react-query";
import hotelsData from "../data/hotels.json";

export const handleFetchHotels = async () => {
  await new Promise((res) => setTimeout(res, 300));
  return hotelsData;
};

export const useHotelsQuery = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: handleFetchHotels,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
  });
};