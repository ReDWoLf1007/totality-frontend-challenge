import React, { useState, useEffect } from 'react';

const Cart = ({ cart, onRemoveFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = cart.reduce((acc, property) => acc + property.price, 0);
    setTotal(calculateTotal);
  }, [cart]);

  return (
    <div className="cart">
      <h2>Your Bookings</h2>
      {cart.length === 0 ? (
        <p>No properties booked.</p>
      ) : (
        <div>
          {cart.map(property => (
            <div key={property.id} className="cart-item">
              <p>{property.title}</p>
              <p>₹{property.price} / night</p>
              <button onClick={() => onRemoveFromCart(property.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
