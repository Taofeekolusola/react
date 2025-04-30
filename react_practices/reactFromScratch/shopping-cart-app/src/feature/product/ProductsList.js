import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productsSlice';
import { addToCart, removeFromCart } from '../cart/cartSlice';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Products </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {products.map((product) => (
  <div
    key={product.id}
    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
  >
    <Link
      to={`/info/${product.id}`}
      onClick={() => localStorage.setItem('selectedProduct', JSON.stringify(product))}
      className="text-white bg-blue-500 hover:bg-blue-600 transition font-medium h-5 w-10 p-1 rounded-xl"
    >
      Product Info
    </Link>

    {/* 👇 Display the product image */}
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-contain mb-4 rounded"
    />

    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
    <p className="text-gray-700 mb-2">
      <strong>Price:</strong> ${product.price}
    </p>
    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
      {product.category}
    </span>

    {isInCart(product.id) ? (
      <button
        onClick={() => dispatch(removeFromCart(product.id))}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        ❌ Remove from Cart
      </button>
    ) : (
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        ➕ Add to Cart
      </button>
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default ProductsList;