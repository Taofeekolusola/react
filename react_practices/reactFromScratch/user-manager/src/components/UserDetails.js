import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUserDetails(data);
      console.log(data);
    };
    fetchDetails();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
      {userDetails.map((details) => (
        <div
          key={details.id}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
        >
          <h3 className="text-lg font-semibold text-gray-800">Name:</h3>
          <p className="mb-2 text-gray-700">{details.name}</p>

          <h3 className="text-lg font-semibold text-gray-800">Username:</h3>
          <p className="mb-2 text-gray-700">{details.username}</p>

          <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
          <p className="mb-2 text-gray-700">{details.email}</p>

          <h3 className="text-lg font-semibold text-gray-800">Street:</h3>
          <p className="text-gray-700">{details.address.street}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
