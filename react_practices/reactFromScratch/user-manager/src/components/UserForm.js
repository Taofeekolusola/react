import React from 'react';

const UserForm = ({ value, onChange, onClick }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={value.name}
        onChange={(e) => onChange('name', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Username"
        value={value.username}
        onChange={(e) => onChange('username', e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onClick}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add
      </button>
    </div>
  );
};

export default UserForm;
