import React from 'react';
import { Heart, MessageSquare, Share2, Bell } from 'lucide-react';
import ActionButton from './ActionButton';
const MainContent = () => {
    return (
      <div className="flex-1 bg-gray-900 flex justify-center">
        <div className="max-w-md w-full py-4">
          <div className="bg-teal-900/50 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/400/500"
              alt="Person using phone"
              className="w-full object-cover"
            />
            
            <div className="flex items-center mt-2 px-4 py-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-xs">A</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Anonynomus</p>
                <div className="flex items-center">
                  <p className="text-gray-400 text-xs">How I was raped by my uncle</p>
                  <button className="text-gray-400 text-xs ml-1">read more...</button>
                  <span className="text-gray-500 text-xs ml-1">18 hours ago</span>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex justify-evenly mt-2">
            <ActionButton icon={Bell} count="40k" />
            <ActionButton icon={Heart} count="40k" />
            <ActionButton icon={MessageSquare} count="40k" />
            <ActionButton icon={Share2} count="40k" />
          </div>
        </div>
      </div>
    );
};
  export default MainContent