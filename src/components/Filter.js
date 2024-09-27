import React, { useState } from 'react';


const Filter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const applyFilters = () => {
    let priceRangeValues = [0, Infinity];
    switch (priceRange) {
      case 'below-200':
        priceRangeValues = [0, 200];
        break;
      case '200-400':
        priceRangeValues = [200, 400];
        break;
      case '400-600':
        priceRangeValues = [400, 600];
        break;
      case 'above-600':
        priceRangeValues = [600, Infinity];
        break;
      default:
        priceRangeValues = [0, Infinity];
    }

    onFilter({ priceRange: priceRangeValues, location });
  };


  return (
    <div className="filters">
      <div className='price-lan'>
      <label>
        Price Range:
        </label>
        <select value={priceRange} onChange={handlePriceChange}>
        <option value="">Select Price Range</option>
        <option value="below-200">Below ₹200</option>
        <option value="200-400">₹200 - ₹400</option>
        <option value="400-600">₹400 - ₹600</option>
        <option value="above-600">Above ₹600</option>
      </select>
      </div>
      

      <div className='price-lan'>
      <label>
        Language:
      </label>
      <select value={location} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Surat">Surat</option>
        <option value="Dehradun">Dehradun</option>
      </select>
      </div>
      <div className='price-lan'>
      <button onClick={applyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

export default Filter;
