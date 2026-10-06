import {  FaUser,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import './Booking.css'
import { useChange } from '../../store/useStore';
const BookingCard = () => {
  const {booking,setBooking}=useChange()
  const handleBooking=(event)=>{
    setBooking(event)
  }
  return (
<div className="booking-card">
                <div className="booking-card-header">
                  <div className="booking-icon-box">
                    <FaUser className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Guest Details</h2>
                    <p className="text-xs text-slate-400">Please enter primary guest info as shown on official ID.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="booking-label">First Name</label>
                    <input
                      type="text"
                      required
                      name='firstName'
                      value={booking.firstName}
                      onChange={handleBooking}
                      className="booking-input"
                    />
                  </div>
                  <div>
                    <label className="booking-label">Last Name</label>
                    <input
                      type="text"
                      required
                      value={booking.lastName}
                      name='lastName'
                      onChange={handleBooking}
                      className="booking-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="booking-label">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="booking-icon-input" />
                      <input
                        type="email"
                        required
                        value={booking.email}
                        name='email'
                        onChange={handleBooking}
                        className="booking-input booking-input-icon"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="booking-label">Phone Number</label>
                    <div className="relative">
                      <FaPhone className="booking-icon-input" />
                      <input
                        type="tel"
                        required
                        value={booking.phone}
                        name='phone'
                        onChange={handleBooking}
                        className="booking-input booking-input-icon"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="booking-label">Special Requests (Optional)</label>
                  <textarea
                    rows={3}
                    value={booking.specialRequests}
                    name='specialRequests'
                    onChange={handleBooking}
                    placeholder="E.g., quiet room, early arrival, accessibility needs..."
                    className="booking-input"
                  />
                </div>
              </div>  )
}

export default BookingCard