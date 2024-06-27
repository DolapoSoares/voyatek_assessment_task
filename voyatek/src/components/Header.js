import React from 'react';

function Settings() {
  return (
    
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/soares04/image/upload/v1719481755/tkr1ptr7hl0htcbwdmd4.png" 
            alt="go logo"
            className="h-10"
          />
        </div>
        <div className="relative mr-0">
          <input
            type="search"
            placeholder="Search here..."
            className="bg-gray-200 rounded-lg pl-8 py-2 pr-4 w-64 outline-none "
            style={{ marginLeft: "-8px" }} // Adjust margin left to position closer to the logo
          />
           <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-500"></i>
          </div>
        </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <i className="fas fa-bell text-xl text-gray-700"></i>
            <span className="text-gray-700">Notifications</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-wallet text-xl text-gray-700"></i>
            <span className="text-gray-700">Wallet</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-question-circle text-xl text-gray-700"></i>
            <span className="text-gray-700">Inquiries</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-cog text-xl text-gray-700"></i>
            <span className="text-gray-700">Settings</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://res.cloudinary.com/soares04/image/upload/v1719485240/ciq01y4pdjn60vtdp3tc.png"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div>
        <i className="fas fa-caret-down text-gray-700 ml-1 cursor-pointer"></i>
        </div>
      </div>

    </div>
   
  );
}

export default Settings;
