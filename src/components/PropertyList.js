import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import Filter from './Filter';

const PropertyList = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filters) => {
    let filtered = properties;
    if (filters.location) {
      filtered = filtered.filter(p => p.location.includes(filters.location));
    }
    if (filters.priceRange) {
      filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    }
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
