import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className="flex justify-between items-center p-4 text-black shadow-md">
      {/* Logo/Image */}
      <div className="flex-shrink-0 ml-10">
        <img
          src="/logo.png" // Replace with your image path
          alt="Logo"
          className="w-auto h-5"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-10 mr-10 text-[14px]">
        <li><a href="#" className=" font-semibold hover:underline">Home</a></li>
        <li><a href="#" className=" font-semibold hover:underline">Categories</a></li>
        <li><a href="#" className=" font-semibold hover:underline">Notifications</a></li>
        <li><a href="#" className=" font-semibold hover:underline">AI Music</a></li>

        {/* Day-Night Toggle Button */}
        <li>
          <button
            onClick={toggleDarkMode}
            className="text-xl focunormaline-none transition-colors duration-300"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </li>

        {/* Profile Icon */}
        <li>
          <FaUserCircle size={24} className="text-gray-800 dark:text-gray-200" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
