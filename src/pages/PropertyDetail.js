import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = ({ properties, addToCart }) => {
    const { id } = useParams();
    const propertyId = parseInt(id);
    const property = properties.find((prop) => prop.id === propertyId);
  
    if (!property) {
      return <h2>Property not found</h2>;
    }

  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>{property.location}</p>
      <p>₹{property.price} / night</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
};

export default PropertyDetail;
