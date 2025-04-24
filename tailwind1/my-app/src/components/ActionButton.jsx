import React from 'react';
const ActionButton = ({ icon: Icon, count }) => {
    return (
      <div className="flex flex-col items-center">
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-1">
          <Icon className="w-5 h-5 text-gray-400" />
        </button>
        <span className="text-gray-400 text-sm">{count}</span>
      </div>
    );
};
export default ActionButton