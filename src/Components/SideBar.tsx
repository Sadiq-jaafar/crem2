"use client"; // Correct: all lowercase

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Example icons
import images from '../../constants/images';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-blue-300 p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`} // Adjust width for collapsed/expanded states
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute ${isCollapsed ? 'right-300' : 'right-258'} transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none`}
      >
        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />} {/* Toggle arrow icon */}
      </button>

      {/* Logo Section */}
      <div className="items-center mb-8">
        <Image src={images.logo} alt='logo'/>
        
      </div>

      <div className="justify-between">
      {/* Navigation Links */}
      <div className="flex flex-col space-y-4">
        <Link href="/" className="flex items-center text-blue-800 hover:text-blue-600">
          <FaHome className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Home</span>
        </Link>
        <Link href="/about" className="flex items-center text-blue-800 hover:text-blue-600">
          <FaInfoCircle className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>About</span>
        </Link>
        <Link href="/contact" className="flex items-center text-blue-800 hover:text-blue-600">
          <FaEnvelope className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Contact</span>
        </Link>
      </div>

      <div className="item-center flex flex-col">
        

      </div>
      </div>
    </div>
  );
};

export default SideBar;