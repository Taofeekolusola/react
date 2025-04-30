import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4 text-center">
        Welcome to <span className="text-blue-600">My Shopping App</span>
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Discover the best deals, browse through our categories, and shop with ease. Your one-stop destination for quality and affordability.
      </p>
      <Link
        to="/product"
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition-shadow shadow-md hover:shadow-xl"
      >
        🛒 Start Shopping
      </Link>
    </div>
  );
};

export default Home;