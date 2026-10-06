import { useMemo } from "react"
import { useChange } from "../store/useStore"
import { useHotelsQuery } from "../services/HandleAPI"
const Filtertion = () => {
    const {data:hotels,isLoading}=useHotelsQuery()
    const filter=useChange((state)=>state.filter)
    const visiableHotels=useMemo(()=>{
if(!hotels) return []
const term = filter.search.trim().toLowerCase();
const result=hotels.filter((hotel)=>{
    const matchSearch=!term || hotel.name?.toLowerCase().includes(term)
    || hotel.country?.toLowerCase().includes(term)  || hotel.type?.toLowerCase().includes(term) || hotel.location?.toLowerCase().includes(term);
    const matchStars=filter.stars.length === 0 || filter.stars.includes(hotel.rate);
    const matchLocation=filter.location.length === 0 || filter.location.includes(hotel.country);
    const matchTypes=filter.types.length === 0 || filter.types.includes(hotel.type);
    return matchSearch && matchLocation && matchStars && matchTypes
})
 const priceOf = (h) =>
      Number(String(h.price).replace(/[^0-9.]/g, '')) || 0;

    if (filter.price === 'Price Low to Height')
      result.sort((a, b) => priceOf(a) - priceOf(b));
    else if (filter.price === 'Price Height to Low')
      result.sort((a, b) => priceOf(b) - priceOf(a));
    else if (filter.price === 'Newest')
      result.sort((a, b) => Number(b.id) - Number(a.id));

    return result
    },[filter,hotels])
  return{visiableHotels,isLoading}
}

export default Filtertion