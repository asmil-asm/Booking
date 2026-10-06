import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Rooms.css';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import MoudelRoom from "./MoudelRoom";
import { useState } from "react";
import { useActions } from "../../store/useStore";
import { useHotelsQuery } from '../../services/HandleAPI';
import Loading from '../Loading/Loading';

const Rooms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showMoudelroom, setShowMoudelroom} = useActions();
  const [useId, setId] = useState(null);



  const { data: hotels, isLoading } = useHotelsQuery();

  if (isLoading || !hotels) return <Loading />;
  
  const hotel = hotels.find((hotel) => String(hotel.id) === id);
  if (!hotel) return null;

  const handleShowMoudel = (roomId) => {
    setId(roomId);
    setShowMoudelroom();
  };



  return (
    <div className="rooms">
      <hr />
      <div className="rooms-details">
        {hotel.rooms.map((room) => {
        
          return (
            <div key={room.id} className="room">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                spaceBetween={5}
                navigation
              >
                {room.images.map((image, idx) => (
                  <SwiperSlide key={idx} className="slider-images">
                    <img src={image} alt={room.title}loading='lazy' />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3>{room.title}</h3>

              <div className="stars">
                {Array.from({ length: room.rating }).map((_, idx) => (
                  <div key={idx}><FaStar /></div>
                ))}
              </div>

              <div className="aminities">
                {room.aminities.map((item, idx) => (
                  <div key={idx} className="aminity">
                    <div className="icon">{item.icons}</div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <div onClick={() => handleShowMoudel(room.id)} className="more">
                More Details <RiArrowRightSLine />
              </div>

             

            

              <button
                onClick={() => {
                    navigate(`/booking-room/${room.id}`)
                }}
                className="book"
              >
                Book Now
              </button>
              <p>You will not be charged yet</p>
            </div>
          );
        })}
      </div>

      {showMoudelroom && (
        <>
          <div className="shadow" onClick={handleShowMoudel}></div>
          <MoudelRoom useId={useId} />
        </>
      )}
    </div>
  );
};

export default Rooms;