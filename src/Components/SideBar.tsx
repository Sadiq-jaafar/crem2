"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      className={`relative justify-between h-screen p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[5%]' : 'w-[9.5%]  '} fixed top-0 left-0 z-50 flex flex-col`}
      style={{ backgroundColor: primary }}
    >
      {/* Logo Section */}
      <div className="justify-between flex flex-col">
      <div className="flex items-center justify-center">
          <Image
            src={images.logo}
            alt="Logo"
            width={43}
            height={48}
            className="transition-all duration-300 mb-[25px] ease-in-out w-[43px] h-[48px] 2xl:w-32 2xl:h-36"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center left-0 space-y-2">

          <div className={`hover:bg-[#77898D] 2xl:mt-4 2xl:mb-4 ${isCollapsed ? 'w-[5%] itmes-center justify-center pl-5' : 'w-[9.5%] '} h-[32px] m-0  py-[3px] pl-[11px] fixed  left-0 items-center justify-center ${isActive('/') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/" 
            className={`flex items-center 2xl:h-[100px]  text-gray-200 hover:bg-[#77898D]  p-1 ${isActive('/') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.dashboard} alt="Dashboard icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] 2xl:text-[70px]   2xl:mb-4 2xl:h-[100px] ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </Link>
          </div>

           <div className={`hover:bg-[#77898D] 2xl:mt-4 2xl:mb-4 ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[14px]'} fixed mt-9 py-[3px] pl-2 h-[32px] left-0 items-center justify-center ${isActive('/tabs/Projects') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Projects" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Projects') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.projects} alt="Projects icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Projects</span>
          </Link>
           </div>

            <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-18 pl-2 py-[3px] fixed h-[32px]  left-0 items-center justify-center ${isActive('/tabs/Departments') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Departments" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Departments') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Departments} alt="Departments icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Departments</span>
          </Link>
            </div>
           <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-27 pl-2 py-[3px] fixed h-[32px] left-0 items-center justify-center ${isActive('/tabs/Property') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Property" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Property') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Property} alt="Property icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Properties</span>
          </Link>
           </div>
            <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-36 pl-2 pb-[7px] h-[32px] fixed  left-0 items-center justify-center ${isActive('/tabs/Clients') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Clients" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Clients') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Client} alt="Client icon" width={24} height={27} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Clients</span>
          </Link>
            </div>
           <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-45 pl-2 py-[3px] h-[32px] fixed left-0 items-center justify-center ${isActive('/tabs/Events') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Events" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Events') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Meeting} alt="Meeting icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Events</span>
          </Link>
           </div>
           <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-54 py-[3px] pl-2 h-[32px] fixed left-0 items-center justify-center  ${isActive('/tabs/Drivers') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Drivers" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Drivers') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Driver} alt="Driver icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Drivers</span>
          </Link>
           </div>
           <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-63 pl-2 py-[3px] h-[32px] fixed left-0 items-center justify-center ${isActive('/tabs/Finance') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Finance" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Finance') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Finance} alt="Finance icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Finance</span>
          </Link>
           </div>
           
            <div className={`hover:bg-[#77898D] ${isCollapsed ? 'w-[5%] itmes-center justify-between pl-6' : 'w-[9.5%] 2xl:w-[450px] 2xl:h-[100px]  pl-[13px]'} mt-72 py-[3px] pl-2 fixed h-[32px] left-0 items-center justify-center ${isActive('/tabs/Settings') ? 'bg-[#77898D]' : ''}`}>

          <Link 
            href="/tabs/Settings" 
            className={`flex items-center text-gray-200 hover:bg-[#77898D]  pt-1 ${isActive('/tabs/Settings') ? 'bg-[#77898D]' : ''}`}
          >
            <Image src={icons.Settings} alt="Settings icon" width={20} height={20} />
            <span className={`ml-2 text-[12px] ${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
          </Link>
            </div>
        </div>
      </div>

      <div className="items-center align-center flex flex-col">
        <Image src={images.Profile} alt="Profile icon" width={40} height={40} />
        <span className={` text-zinc-50 ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>Profile</span>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute 2xl:hidden ${isCollapsed ? 'left-[43px]' : 'left-[106px]'} items-center py-1 h-[30px] w-[30px]justify-center border-[1px] transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 translate-x-1/2 text-white p-2 rounded-[10px] shadow-lg hover:bg-blue-600 focus:outline-none`}
        style={{ borderColor: "#77898D", backgroundColor: primary }}

      >
        {isCollapsed ? <Image src={icons.right} alt="Profile icon" width={7} height={20} /> : <Image src={icons.left} alt="Profile icon" width={7} height={20} />}
      </button>
    </div>
  );
};

export default SideBar;