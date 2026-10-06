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
  const { showMoudelroom, setShowMoudelroom,setTotal } = useActions();
  const [useId, setId] = useState(null);

  const [selectedPolicies, setSelectedPolicies] = useState({});
  const [selectedExtras, setSelectedExtras] = useState({});

  const { data: hotels, isLoading } = useHotelsQuery();

  if (isLoading || !hotels) return <Loading />;
  
  const hotel = hotels.find((hotel) => String(hotel.id) === id);
  if (!hotel) return null;

  const handleShowMoudel = (roomId) => {
    setId(roomId);
    setShowMoudelroom();
  };

  // 2. معالجة تغيير سياسة الإلغاء
  const handlePolicyChange = (roomId, value) => {
    setSelectedPolicies((prev) => ({ ...prev, [roomId]: value }));
  };

  const handleExtraChange = (roomId, price) => {
    setSelectedExtras((prev) => ({ ...prev, [roomId]: price }));
  };

  return (
    <div className="rooms">
      <hr />
      <div className="rooms-details">
        {hotel.rooms.map((room) => {
          const extraPrice = selectedExtras[room.id] || 0;
          const totalPrice = room.price + extraPrice;

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

              <div className="policy">
                <div className="title">
                  <h4>Cancellation policy</h4>
                  <span>per stay</span>
                </div>

                <div className="cncellation">
                  <input
                    type="radio"
                    id={`non-refundable-${room.id}`}
                    name={`cancellation-${room.id}`} 
                                        value="non-refundable"
                    checked={(selectedPolicies[room.id] || 'non-refundable') === 'non-refundable'}
                    onChange={(e) => handlePolicyChange(room.id, e.target.value)}
                  />
                  <label htmlFor={`non-refundable-${room.id}`}>
                    Non-refundable
                  </label>
                </div>

                <div className="cncellation">
                  <input
                    type="radio"
                    id={`fully-refundable-${room.id}`}
                    name={`cancellation-${room.id}`}
                    value="fully-refundable"
                    checked={selectedPolicies[room.id] === 'fully-refundable'}
                    onChange={(e) => handlePolicyChange(room.id, e.target.value)}
                  />
                  <label htmlFor={`fully-refundable-${room.id}`}>
                    Fully refundable before 8 Apr
                  </label>
                </div>
              </div>

              <div className="extras">
                <h4>Extras</h4>

                <div className="info">
                  <input
                    type="radio"
                    id={`no-extras-${room.id}`}
                    name={`extras-${room.id}`} 
                    value={0}
                    checked={(selectedExtras[room.id] || 0) === 0}
                    onChange={() => handleExtraChange(room.id, 0)}
                  />
                  <label htmlFor={`no-extras-${room.id}`}>
                    No extras <span>$0</span>
                  </label>
                </div>

                <div className="info">
                  <input
                    type="radio"
                    id={`breakfast-${room.id}`}
                    name={`extras-${room.id}`} 
                    value={52}
                    checked={selectedExtras[room.id] === 52}
                    onChange={() => handleExtraChange(room.id, 52)}
                  />
                  <label htmlFor={`breakfast-${room.id}`}>
                    Breakfast + Food/drink credit or discount + Special deal
                    <span>$52</span>
                  </label>
                </div>
              </div>

              <div className="price">
                ${totalPrice}
                <br />
                <p>for 1 room includes taxes & fees</p>
              </div>

              <button
                onClick={() => {
                    navigate(`/booking-room/${room.id}`)
                    setTotal(totalPrice)
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