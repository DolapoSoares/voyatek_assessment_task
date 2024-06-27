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
        <li className="mb-4">
          <FiUser className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Account</span>
        </li>
        <li className="mb-4">
          <FiLock className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Security</span>
        </li>
        <li className="mb-4">
          <FiBell className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Notifications</span>
        </li>
        <li className="mb-4">
          <FiDollarSign className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Pricing</span>
        </li>
        <li className="mb-4">
          <FiShoppingBag className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Sales</span>
        </li>
        <li className="mb-4">
          <FiUsers className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Users & Roles</span>
        </li>
        <li className="mb-4">
          <FiShield className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Backups</span>
        </li>
      </ul>
      <button className="py-2 px-4 bg-blue-500 text-white rounded" onClick={handleToggleMinimize}>
        <FiArrowLeft className="text-lg" /> <span className={`${isMinimized ? 'hidden' : 'text-lg'}`}>Back to Dashboard</span>
      </button>
    </div>
  );
}

export default Sidebar;