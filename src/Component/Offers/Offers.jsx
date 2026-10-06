import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {useHotelsQuery} from '../../services/HandleAPI'
import {useNavigate} from 'react-router-dom'
import Loading from '../Loading/Laoding';
import './Offers.css'
const Offers = () => {
      const navigate=useNavigate()
    const {data:hotels,isLoading}=useHotelsQuery()
    if(isLoading || !hotels) return <Loading/>
    const offers=hotels?.filter((hotel)=>hotel.offer>20)|| []
    if(!offers) return []
  return (
    <section className="Offers">
        <motion.h2    initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>Get Our Special Offer</motion.h2>
        <motion.div className="cards"
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1,transition:{duration:3}}}>
<Swiper
 modules={[Autoplay,Pagination]}
      spaceBetween={30}
      centeredSlides
loop={offers.length > 3}
      pagination={{ clickable: true }}
    slidesPerView={3}
         speed={800}
         autoplay={{
            delay:2500,
             stopOnLastSlide: false,
         }}
          breakpoints={{

                  768: {
      slidesPerView: 3,
    },
    250:{
              slidesPerView: 1,
    },
    500:
    {
              slidesPerView: 2,

    }
     

          }}>
     {offers.map((hotel) => {
            return (
              <SwiperSlide key={hotel.id} className="card">
                <img src={hotel.image} alt={hotel.name || "hotel offer"} />
                <div className="info">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <div className="date">Valid until 3 Days from now</div>
                </div>
                <div className="view-offer">
                  <span>Save {hotel.offer}% today</span>
                  <button onClick={() =>{ {navigate(`/hotel/${hotel.id}` )}}}>View Offer</button>
                </div>
              </SwiperSlide>
            );
          })}
</Swiper>

</motion.div>

    </section>
  )
}

export default Offers