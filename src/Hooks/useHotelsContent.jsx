import { useMemo } from "react";
import { useHotelsQuery } from "../services/HandleAPI";

const useHotelsContent = () => {
  const { data: hotels, isLoading, isError, error } = useHotelsQuery();

  const { uniqueTypes, uniqueCountries } = useMemo(() => {
    if (!Array.isArray(hotels)) {
      return { uniqueTypes: [], uniqueCountries: [] };
    }

    const typesMap = new Map();
    const countriesMap = new Map();

    hotels.forEach((hotel) => {
      if (hotel?.type && !typesMap.has(hotel.type)) {
        typesMap.set(hotel.type, {
          type: hotel.type,
          hotelImage: hotel["image-type"],
        });
      }

      if (hotel?.country && !countriesMap.has(hotel.country)) {
        countriesMap.set(hotel.country, {
          country: hotel.country,
          image: hotel["image-country"],
        });
      }
    });

    return {
      uniqueTypes: Array.from(typesMap.values()),
      uniqueCountries: Array.from(countriesMap.values()),
    };
  }, [hotels]);

  return { uniqueTypes, uniqueCountries, isLoading, isError, error };
};

export default useHotelsContent;