"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import images from '../../constants/images';
import { primary } from '../../constants/colors';
import icons from '../../constants/icons';

const SideBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  return (
    <div
      className={`relative justify-between h-screen p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[70px]' : 'w-[120px]'} fixed top-0 left-0 z-50 flex flex-col`}
      style={{ backgroundColor: primary }}
    >
      {/* Logo Section */}
      <div className="justify-between flex flex-col">
        <div className="flex items-center justify-center mb-8">
          <Image
            src={images.logo}
            alt="Logo"
            width={isCollapsed ? 40 : 80}
            height={isCollapsed ? 40 : 80}
            className="transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-2 space-y-2">
          <Link 
            href="/" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.dashboard} alt="Dashboard icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </Link>
          <Link 
            href="/tabs/Projects" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Projects') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.projects} alt="Projects icon" width={25} height={25} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Projects</span>
          </Link>
          <Link 
            href="/tabs/Departments" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Departments') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Departments} alt="Departments icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Departments</span>
          </Link>
          <Link 
            href="/tabs/Property" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Property') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Property} alt="Property icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Property</span>
          </Link>
          <Link 
            href="/tabs/Clients" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Clients') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Client} alt="Client icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Client</span>
          </Link>
          <Link 
            href="/tabs/Meetings" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Meetings') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Meeting} alt="Meeting icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Meetings</span>
          </Link>
          <Link 
            href="/tabs/Drivers" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Drivers') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Driver} alt="Driver icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Drivers</span>
          </Link>
          <Link 
            href="/tabs/Finance" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Finance') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Finance} alt="Finance icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Finance</span>
          </Link>
          <Link 
            href="/tabs/Partnership" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Partnership') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Parnership} alt="Partnership icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Partnership</span>
          </Link>
          <Link 
            href="/tabs/Settings" 
            className={`flex items-center text-gray-200 hover:bg-gray-700 rounded-md pt-1 ${isActive('/tabs/Settings') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Settings} alt="Settings icon" width={20} height={20} />
            <span className={`ml-2 text-[10px] ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
          </Link>
        </div>
      </div>

      <div className="items-center align-center flex flex-col">
        <Image src={images.Profile} alt="Profile icon" width={40} height={40} />
        <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Profile</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute ${isCollapsed ? 'left-[43px]' : 'left-[93px]'} items-center h-[50px] w-[30px] border-[1px] transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 translate-x-1/2 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none`}
        style={{ borderColor: "#77898D", backgroundColor: primary }}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default SideBar;