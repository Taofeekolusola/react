import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-gray-800 flex items-center justify-end px-6">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
        </header>
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;