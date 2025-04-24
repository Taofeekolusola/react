import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [input, setInput] = useState({ name: '', username: '' });

  const handleClick = () => {
    if (!input.name.trim() || !input.username.trim()) return;
    const newUser = {
      id: userList.length + 1,
      name: input.name,
      username: input.username
    };
    setUserList([...userList, newUser]);
    setInput({ name: '', username: '' });
  };

  const handleChange = (field, value) => {
    setInput(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUserList(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Directory</h1>
      <UserForm value={input} onChange={handleChange} onClick={handleClick} />

      <div className="mt-8 w-full max-w-2xl grid grid-cols-1 gap-4">
        {userList.map(user => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 hover:bg-blue-50 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 hover:text-red-600">
              {user.name}
            </h2>
            <p className="text-gray-600 italic">({user.username})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;