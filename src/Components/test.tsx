"use client"; // Correct: all lowercase

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Example icons
import images from '../../constants/images';
import { primary } from '../../constants/colors';
import icons from '../../constants/icons';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`relative h-screen p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[70px]' : 'w-[120px]'} fixed top-0 left-0 z-50 flex flex-col`}
      style={{ backgroundColor: primary }}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-8">
        <Image
          src={images.logo}
          alt="Logo"
          width={isCollapsed ? 40 : 80} // Adjust logo size based on collapsed state
          height={isCollapsed ? 40 : 80}
          className="transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex flex-col flex-grow space-y-2 overflow-y-auto">
        {/* Navigation Links */}
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.dashboard} alt="Dashboard icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.projects} alt="Projects icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Projects</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Departments} alt="Departments icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Departments</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Property} alt="Property icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Property</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Client} alt="Client icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Client</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Meeting} alt="Meeting icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Meetings</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Driver} alt="Driver icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Drivers</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Finance} alt="Finance icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Finance</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Parnership} alt="Partnership icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Partnership</span>
        </Link>
        <Link href="/" className="flex items-center text-gray-200 hover:bg-gray-700 rounded-md p-2">
          <Image src={icons.Settings} alt="Settings icon" width={20} height={20} />
          <span className={`ml-2 text-sm ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="mt-auto flex items-center justify-center flex-col">
        <Image
          src={images.Profile}
          alt="Profile icon"
          width={isCollapsed ? 30 : 40}
          height={isCollapsed ? 30 : 40}
          className="rounded-full border-2 border-white"
        />
        <span className={`text-sm mt-2 ${isCollapsed ? 'hidden' : 'block'}`}>Profile</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute ${isCollapsed ? 'left-[43px]' : 'left-[93px]'} top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-800 border border-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition-all duration-300 ease-in-out`}
        style={{
          borderColor: "#77898D",
          backgroundColor: primary,
        }}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default SideBar;