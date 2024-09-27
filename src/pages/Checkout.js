import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking here
    console.log('Booking details:', bookingDetails);
    console.log('Booked properties:', cart);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={bookingDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={bookingDetails.email} onChange={handleChange} required />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={bookingDetails.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
