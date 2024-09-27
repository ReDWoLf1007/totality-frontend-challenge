import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyListings from './PropertyListings';
import PropertyDetail from './pages/PropertyDetail';
import { getProperties } from './PropertyListings';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import './App.css'

const App = () => {

  const properties = getProperties();
  const [cart, setCart] = useState([]);

  const addToCart = (property) => setCart([...cart, property]);
  const removeFromCart = (id) => setCart(cart.filter(property => property.id !== id));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertyListings />} />
        <Route path="/property/:id" element={<PropertyDetail properties={properties} addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
