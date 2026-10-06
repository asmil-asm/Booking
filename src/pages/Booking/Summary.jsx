import { FaLock } from 'react-icons/fa';
import './Booking.css';
import { useParams } from 'react-router-dom';
import { useHotelsQuery } from '../../services/HandleAPI';
import Loading from '../../Component/Loading/Loading';
import { useState } from 'react';
const Summary = ({submit}) => {
  const { id } = useParams();
  const { data: hotels, isLoading } = useHotelsQuery();
    const [selectedPolicies, setSelectedPolicies] = useState({});
  const [selectedExtras, setSelectedExtras] = useState({});

  if (isLoading || !hotels) return <Loading />;

  const roomInfo = hotels?.flatMap((hotel)=>hotel.rooms ||[])
  ?.find((room)=>String(room.id) === id)

  if (!roomInfo) {
    return <div className="text-white p-4 text-center">Room not found</div>;
  }
  const handlePolicyChange = (roomId, value) => {
    setSelectedPolicies((prev) => ({ ...prev, [roomId]: value }));
  };

  const handleExtraChange = (roomId, price) => {
    setSelectedExtras((prev) => ({ ...prev, [roomId]: price }));
  };
const total = roomInfo.price + (selectedExtras[roomInfo.id] ?? 0);
  
  return (
    <div className="lg:col-span-5 min-w-[300px]">
      <div className="booking-summary">
        <h3 className="booking-summary-title">Booking Summary</h3>

        <div className="booking-summary-room">
          <img
            src={roomInfo.images?.[0]}
            alt={roomInfo.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-bold text-white text-sm leading-snug">
              {roomInfo.title}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {roomInfo.aminities?.[0]?.name}
            </p>
          </div>
        </div>
          <div className="policy">
                <div className="title">
                  <h4>Cancellation policy</h4>
                  <span>per stay</span>
                </div>

                <div className="cncellation">
                  <input
                    type="radio"
                    id={`non-refundable-${roomInfo.id}`}
                    name={`cancellation-${roomInfo.id}`} 
                                        value="non-refundable"
                    checked={(selectedPolicies[roomInfo.id] || 'non-refundable') === 'non-refundable'}
                    onChange={(e) => handlePolicyChange(roomInfo.id, e.target.value)}
                  />
                  <label htmlFor={`non-refundable-${roomInfo.id}`}>1
                    Non-refundable
                  </label>
                </div>

                <div className="cncellation">
                  <input
                    type="radio"
                    id={`fully-refundable-${roomInfo.id}`}
                    name={`cancellation-${roomInfo.id}`}
                    value="fully-refundable"
                    checked={selectedPolicies[roomInfo.id] === 'fully-refundable'}
                    onChange={(e) => handlePolicyChange(roomInfo.id, e.target.value)}
                  />
                  <label htmlFor={`fully-refundable-${roomInfo.id}`}>
                    Fully refundable before 8 Apr
                  </label>
                </div>
              </div>

              <div className="extras">
                <h4>Extras</h4>

                <div className="info">
                  <input
                    type="radio"
                    id={`no-extras-${roomInfo.id}`}
                    name={`extras-${roomInfo.id}`} 
                    value={0}
                    checked={(selectedExtras[roomInfo.id] || 0) === 0}
                    onChange={() => handleExtraChange(roomInfo.id, 0)}
                  />
                  <label htmlFor={`no-extras-${roomInfo.id}`}>
                    No extras <span>$0</span>
                  </label>
                </div>

                <div className="info">
                  <input
                    type="radio"
                    id={`breakfast-${roomInfo.id}`}
                    name={`extras-${roomInfo.id}`} 
                    value={52}
                    checked={selectedExtras[roomInfo.id] === 52}
                    onChange={() => handleExtraChange(roomInfo.id, 52)}
                  />
                  <label htmlFor={`breakfast-${roomInfo.id}`}>
                    Breakfast + Food/drink credit or discount + Special deal
                    <span>$52</span>
                  </label>
                </div>
              </div>

        <div className="space-y-3 border-t border-blue-900/60 pt-4 text-xs">
          <div className="booking-total-row">
            <div>
              <span className="font-extrabold text-white text-base block">
                Total Amount
              </span>
            </div>
            <span className="text-3xl font-black text-blue-400">${total}</span>
          </div>
         
        </div>

        <button type="submit" className="booking-submit-btn" disabled={submit}>
          <FaLock className="w-4 h-4" />
          <span>Confirm & Pay ${total}</span>
        </button>
      </div>
    </div>
  );
};

export default Summary;