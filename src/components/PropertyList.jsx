
import React from 'react';
import PropertyCard from './PropertyCard';
import properties from '../lib/data';

const PropertyList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            name={property.name}
            description={property.description}
            price={property.price}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
