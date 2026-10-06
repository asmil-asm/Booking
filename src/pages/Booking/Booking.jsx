import { useState } from 'react';
import {
  FaMagic,
  FaClock,
  FaCheck
} from 'react-icons/fa';
import BookingCard from './BookingCard'
import PaymentMethod from './PaymentMethod';
import { useChange } from '../../store/useStore';
import Summary from './Summary';
import './Booking.css'

const Booking = () => {
  const [step, setStep] = useState('checkout');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');



   const {booking,setBooking}=useChange()
 



 

 

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef('HTL-' + Math.floor(100000 + Math.random() * 900000));
      setStep('confirmed');
    }, 1500);
  };

  return (
    <div className="booking-page">
      <main className="booking-main">
        {step === 'checkout' ? (
          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="booking-left">
              <BookingCard/>

              {/* Card 2: Arrival & Extras */}
              <div className="booking-card">
                <div className="booking-card-header">
                  <div className="booking-icon-box">
                    <FaMagic className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Arrival & Enhance Your Stay</h2>
                    <p className="text-xs text-slate-400">Select add-on services and let us know your schedule.</p>
                  </div>
                </div>

                <div>
                  <label className="booking-label">Estimated Arrival Time</label>
                  <div className="relative">
                    <FaClock className="booking-icon-input" />
                    <select
                      value={booking.arrivalTime}
                      name='arrivalTime'
                      onChange={(e) => setBooking(e)}
                      className="booking-input booking-input-icon cursor-pointer"
                    >
                      <option value="12:00 - 13:00">12:00 - 13:00 (Early Arrival)</option>
                      <option value="13:00 - 14:00">13:00 - 14:00</option>
                      <option value="15:00 - 16:00">15:00 - 16:00 (Standard Check-in)</option>
                      <option value="16:00 - 18:00">16:00 - 18:00</option>
                      <option value="18:00+">Late Check-in (After 18:00)</option>
                    </select>
                  </div>
                </div>

               
              </div>

              {/* Card 3: Payment Options */}
             <PaymentMethod/>
            </div>

            {/* Right Column - Order Summary */}
           <Summary submit={isSubmitting}/>
          </form>
        ) : (
          <div className="booking-confirmation">
            <div className="booking-confirmation-icon">
              <FaCheck className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">Your Stay is Confirmed!</h1>
              <p className="text-slate-400 text-sm mt-2">
                Booking Reference: <strong className="text-blue-400">{bookingRef}</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={() => {setStep('checkout')}}
              className="bg-blue-600 text-white font-bold h-[30px] w-[170px] rounded-xl border-none cursor-pointer"
            >
              Back to Reservation
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Booking;