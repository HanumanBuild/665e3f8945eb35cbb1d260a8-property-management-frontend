
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Property Management, Inc. All rights reserved.</p>
        <p>Contact us at info@propertymanagement.com</p>
      </div>
    </footer>
  );
};

export default Footer;
