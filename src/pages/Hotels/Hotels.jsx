// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './Hotels.css'
import { useNavigate } from 'react-router-dom';
import Filter from '../../Component/Filter/Filter';
import Loading from "../../Component/Loading/Laoding";
import Filtertion from '../../util/Filtertion';
import { useChange } from '../../store/useStore';
import { useEffect } from 'react';
import DynamicIcon from '../../data/DynamicIcon';
const Hotels = () => {
  let navigate = useNavigate();
const {visiableHotels,isLoading}=Filtertion()
const {resetFilter}=useChange()
useEffect(()=>{
return(()=>resetFilter())
},[resetFilter])
if(!visiableHotels || isLoading) return <Loading/>
  return (   
    <div className='main'>
      <motion.h1 
        initial={{x: -50, opacity: 0}}
        animate={{x: 0, opacity: 1, transition: {duration: 4}}}
      >
        Experience Luxury And Comfort With In Every Corners
      </motion.h1>
     
      <section>
       
<Filter/>
        <div className="hotels">
          {visiableHotels.length > 0 ? visiableHotels.map((hotel, index) => (
            <div className='hotel' key={ index}>
              <img src={hotel.image} alt={hotel.name} />
              <div className='data'>
                <h2>{hotel.name}</h2>
                <p><CiLocationOn/> {hotel.location}</p>
                <div className='aminities'>
                  <h4>Aminities</h4>
                  <ul>
                    {hotel.aminities.map((item, index) => (
                      <li key={index} className='flex justify-center items-center flex-col '>
                   <DynamicIcon className='icon' name={item.icon}/>
                        <span key={index}>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4>{hotel.price} <span>for 1 night</span></h4>
                <div className='stars'>
                  {Array.from({length: hotel.rate}).map((_, index) => (
                    <FaStar key={index}/>
                  ))}
                </div>
                <button onClick={() =>{ {navigate(`/hotel/${hotel.id}` )}}}>View</button>
              </div>
            </div>
          )) : (
            <div className="no-results">
              <h3>No hotels found matching your criteria</h3>
            </div>
          )}
        </div>
      </section>
     
    
    </div>
  )
 

}
export default Hotels