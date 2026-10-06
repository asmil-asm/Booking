import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useHotelsContent from '../../Hooks/useHotelsContent';
import { useChange } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';
import './HotelsCity.css'
const HotelsCity = () => {
   const { uniqueCountries } = useHotelsContent();
   const navigate=useNavigate()
  const {toggelLocation}=useChange()
  const handleCountries=(city)=>{
    toggelLocation(city)
    navigate('/hotels')
  }
  return (
    <section className='cities'>
<motion.h2  initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>Popular searches</motion.h2>
<div>
<Swiper 
      modules={[Autoplay,Pagination]}
      spaceBetween={30}
      centeredSlides
      loop={true}
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
     

          }}
    

        >

        <div>
{uniqueCountries.map((item ,index)=>
    (
<SwiperSlide onClick={()=>handleCountries(item.country)} key={index} className='city'>
<img src={item.image} alt="not found" />
<div className="text">
    <h3>{item.country}</h3>
</div>
    </SwiperSlide>
    )
    
)}
</div>

</Swiper>
</div>

    </section>
  )
}
  

export default HotelsCity