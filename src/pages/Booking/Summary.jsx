import { FaLock } from 'react-icons/fa';
import './Booking.css';
import { useParams } from 'react-router-dom';
import { useHotelsQuery } from '../../services/HandleAPI';
import Loading from '../../Component/Loading/Laoding';
import { useActions } from '../../store/useStore';
const Summary = ({submit}) => {
  const { id } = useParams();
  const { data: hotels, isLoading } = useHotelsQuery();
  const {total}=useActions()

  if (isLoading || !hotels) return <Loading />;

  const roomInfo = hotels?.flatMap((hotel)=>hotel.rooms ||[])
  ?.find((room)=>String(room.id) === id)

  if (!roomInfo) {
    return <div className="text-white p-4 text-center">Room not found</div>;
  }
  console.log(roomInfo)

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