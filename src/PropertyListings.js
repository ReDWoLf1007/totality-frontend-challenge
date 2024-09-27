import React, { useState } from 'react';
import PropertyList from './components/PropertyList';

const PropertyListings = () => {
  const [properties] = useState([
    { id: 1, title: 'Cozy Apartment', description: 'A cozy apartment in New Delhi', price: 200, location: 'New Delhi', image: 'https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg' },
    { id: 2, title: 'Luxury Villa', description: 'A luxury villa by the beach', price: 500, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D' },
    { id: 3, title: 'Modern Condo', description: 'A stylish condo in Surat', price: 300, location: 'Surat', image: 'https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg' },
    { id: 4, title: 'Rustic Cabin', description: 'A peaceful cabin in the mountains', price: 150, location: 'Dehradun', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW58ZW58MHx8MHx8fDA%3D' },
    { id: 5, title: 'Cozy Apartment', description: 'A cozy apartment in New Delhi', price: 300, location: 'New Delhi', image: 'https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg' },
    { id: 6, title: 'Luxury Villa', description: 'A luxury villa by the beach', price: 400, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D' },
    { id: 7, title: 'Modern Condo', description: 'A stylish condo in Surat', price: 200, location: 'Surat', image: 'https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg' },
    { id: 8, title: 'Rustic Cabin', description: 'A peaceful cabin in the mountains', price: 350, location: 'Dehradun', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW58ZW58MHx8MHx8fDA%3D' },
  ]);

  return (
    <div>
      <h1>Property Listings</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export const getProperties = () => {
    const properties = [
      { id: 1, title: 'Cozy Apartment', description: 'A cozy apartment in New Delhi', price: 200, location: 'New Delhi', image: 'https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg' },
      { id: 2, title: 'Luxury Villa', description: 'A luxury villa by the beach', price: 500, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D' },
      { id: 3, title: 'Modern Condo', description: 'A stylish condo in Surat', price: 300, location: 'Surat', image: 'https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg' },
      { id: 4, title: 'Rustic Cabin', description: 'A peaceful cabin in the mountains', price: 150, location: 'Dehradun', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW58ZW58MHx8MHx8fDA%3D' },
      { id: 5, title: 'Cozy Apartment', description: 'A cozy apartment in New Delhi', price: 300, location: 'New Delhi', image: 'https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bedroom-guest-room-five-star-hotel-image_990205.jpg' },
    { id: 6, title: 'Luxury Villa', description: 'A luxury villa by the beach', price: 400, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D' },
    { id: 7, title: 'Modern Condo', description: 'A stylish condo in Surat', price: 200, location: 'Surat', image: 'https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg' },
    { id: 8, title: 'Rustic Cabin', description: 'A peaceful cabin in the mountains', price: 350, location: 'Dehradun', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW58ZW58MHx8MHx8fDA%3D' },
    ];
    return properties;
  }

export default PropertyListings;
