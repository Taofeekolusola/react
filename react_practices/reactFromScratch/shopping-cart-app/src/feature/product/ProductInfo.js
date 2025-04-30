import React, { useEffect, useState } from 'react';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) return <p>Loading product info...</p>;

  return (
      <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-xl">
          {/* 👇 Display the product image */}
        <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 rounded"
        />
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <p className="text-gray-700 mb-2"><strong>Price:</strong> ${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-sm text-blue-700">Category: {product.category}</p>
    </div>
  );
};

export default ProductInfo;