import React, { useState } from 'react';
import { FiUser, FiLock, FiBell, FiDollarSign, FiShoppingBag, FiUsers, FiShield, FiArrowLeft } from 'react-icons/fi';

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="h-screen p-4 pt-6 bg-gray-100">
      <h4>Settings</h4>
      <ul className={`flex flex-col mt-[-120px] justify-center h-full ${isMinimized ? 'w-16' : 'w-64'}`}>
        <li className="mb-4 flex items-center">
          <FiUser className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Account</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiLock className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Security</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiBell className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Notifications</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiDollarSign className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Pricing</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiShoppingBag className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Sales</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiUsers className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Users & Roles</span>
        </li>
        <li className="mb-4 flex items-center">
          <FiShield className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Backups</span>
        </li>
      </ul>
      <button className="flex items-center py-2 px-4 bg-blue-500 text-white rounded" onClick={handleToggleMinimize}>
        <FiArrowLeft className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'} ml-1`}>Back to Dashboard</span>
      </button>
    </div>
  );
}

export default Sidebar;