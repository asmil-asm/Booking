import { useState } from "react";
import {
  FaBuilding,
  FaCreditCard,
  FaLock,
  FaDollarSign
} from 'react-icons/fa';
import './Booking.css'
const PaymentMethod = () => {
     const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    number: '4532 •••• •••• 8890',
    holder: 'ALEXANDER WRIGHT',
    expiry: '08/28',
    cvv: '882'
  });
  return (
 <div className="booking-card">
                <div className="booking-card-header justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="booking-icon-box">
                      <FaCreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Payment Method</h2>
                      <p className="text-xs text-slate-400">Encrypted 256-bit SSL transaction.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <FaLock className="w-3 h-3" />
                    <span>Secure Checkout</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`booking-payment-btn ${paymentMethod === 'card' ? 'booking-payment-btn-active' : ''}`}
                  >
                    <FaCreditCard className="w-4 h-4" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`booking-payment-btn ${paymentMethod === 'paypal' ? 'booking-payment-btn-active' : ''}`}
                  >
                    <FaDollarSign className="w-4 h-4" />
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('hotel')}
                    className={`booking-payment-btn ${paymentMethod === 'hotel' ? 'booking-payment-btn-active' : ''}`}
                  >
                    <FaBuilding className="w-4 h-4" />
                    <span>Pay at Hotel</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="booking-label">Cardholder Name</label>
                      <input
                        type="text"
                        required
                        value={cardData.holder}
                        onChange={(e) => setCardData({ ...cardData, holder: e.target.value })}
                        className="booking-input"
                      />
                    </div>
                    <div>
                      <label className="booking-label">Credit Card Number</label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                        className="booking-input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="booking-label">Expiration Date</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="booking-input"
                        />
                      </div>
                      <div>
                        <label className="booking-label">Security Code (CVV)</label>
                        <input
                          type="password"
                          required
                          maxLength={4}
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          className="booking-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>  )
}

export default PaymentMethod