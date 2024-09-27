import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>{property.location}</p>
      <p>₹{property.price} / night</p>
      <Link to={`/property/${property.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default PropertyCard;
