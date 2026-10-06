import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const handleFetchHotels = async () => {
  try {
    const response = await axios.get('/api/hotels');
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error; 
  }
};

export const useHotelsQuery = () => {
  return useQuery({
    queryKey: ['hotels'],
    queryFn: handleFetchHotels,
  });
};