import React from 'react';
import { Home, Users, MessageCircle, User, Bell, Plus, Search, Heart, MessageSquare, Share2 } from 'lucide-react';
const Sidebar = () => {
    const menuItems = [
      { icon: Home, label: 'Home', active: true },
      { icon: Users, label: 'Councelor' },
      { icon: MessageCircle, label: 'Message' },
      { icon: User, label: 'Profile' },
      { icon: Bell, label: 'Notification' },
      { icon: Plus, label: 'Create' }
    ];
  
    return (
      <div className="w-64 h-screen bg-gray-900 border-r border-gray-800 flex flex-col p-4">
        <div className="text-gray-400 text-xl font-semibold mb-8">Logo</div>
        
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 text-gray-300 placeholder-gray-500"
          />
        </div>
  
        <nav className="flex-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full p-3 mb-2 rounded-lg text-left ${
                item.active 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
  
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Log in
        </button>
      </div>
    );
};

export default Sidebar