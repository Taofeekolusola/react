import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';

const AddRemoveCart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        🛍️ Cart ({items.length} items)
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
                <li key={item.id} className="py-4 flex flex-col gap-1">
                    {/* 👇 Display the product image */}
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4 rounded"
                />
                <span className="text-lg font-semibold text-gray-700">{item.title}</span>
                <span className="text-gray-600">Price: ${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-blue-700">
              Total: ${totalPrice.toFixed(2)}
            </h1>
            <button
              onClick={handleClearCart}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition"
            >
              🗑️ Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddRemoveCart;