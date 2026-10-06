import './Rooms.css'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { useActions } from '../../store/useStore';
import { useHotelsQuery } from '../../services/HandleAPI';
import Loading from '../Loading/Laoding';
const MoudelRoom = ({ useId }) => {
const {id}=useParams();
const {setShowMoudelroom}=useActions();
const{data:hotels,isLoading}=useHotelsQuery()
if(!hotels || isLoading) return <Loading/>
const hotel=hotels.find((hotel)=>String(hotel.id)===id)
const room=hotel.rooms.find((room)=>String(room.id)===useId)
if(!hotel) return <div>Hotel Not Found</div>
const renderMap={
    images:(value)=> (<Swiper
                    className="slider-images"
                    modules={[Navigation]}
                        slidesPerView={1}
                        loop={true}
                     spaceBetween={5}
                      navigation
                        >
                    {value.map((image,index)=>(
                        
                        <SwiperSlide key={index} >
                            <img src={image} alt="not found" />
                        </SwiperSlide>
        ))}

                        </Swiper>),
title:(value)=>(<h3 className='title'>{value}</h3>),
rating:(value)=>(<div className="rating">
      {Array.from({ length: value }).map((_, index) => (
        <div key={index}>       <FaStar /></div>
      ))}
    </div>),

                
aminities:(value)=> (
      <div className="amenities">
        {value.map((item, index) => (
          <div key={index} className="amenity">
            <div className="icon">{item.icons}</div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    ),
price:(value)=>(<h3 className='price'>Price: ${value}</h3>)

}


  return (
    <div className='moudle-room'>
        <div className="close" onClick={setShowMoudelroom}>
            x
        </div>
     {
        Object.entries(room).map(([key,value])=>{
         const render=renderMap[key];
         return (render ? <div key={key}>{render(value)}

         </div> : null)
          
        })
     }
       <div className="policy">
   <div className="title">
         <h4>Cancellation policy</h4>
        <span>per stay</span>
   </div>
  <div className="cncellation">
    <input type="radio" id="non-refundable" />
     <label htmlFor="non-refundable">
Non-refundable</label>

  </div>
  <div className="cncellation">
        <input type="radio" id="fully-refundable" />

    <label htmlFor="fully-refundable">
Fully refundable before 8 Apr
    </label>
  </div>


    </div>
    <div className="extras">
        <h4>Extras</h4>
        <div className="info">
    <input type="radio" id="no-extras" />
            <label htmlFor="no-extras">No extras 
                <span>0$</span>
            </label>
        </div>
        <div className="info">
            <input type="radio" id="breakfast" />   

            <label htmlFor="breakfast">
                Breakfast + Food/drink credit or discount + Special deal
            <span>$52</span>
            </label>
        </div>
    </div>
     <button className="book">Book Now</button>
    <p>You will not be charged yet
</p>
    


    </div>
  )
}

export default MoudelRoom