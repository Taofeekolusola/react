import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Taofaqtech Hub. All rights reserved.</p>
        <div className="flex space-x-4 text-sm">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
