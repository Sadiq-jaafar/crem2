"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaPlus, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import images from '../../constants/images';

const Header2: React.FC = () => {
  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // State for selected logo (1 = Logo 1, 2 = Logo 2)
  const [selectedLogo, setSelectedLogo] = useState<number>(1);
  const pathname = usePathname();
  
  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to select a logo
  const selectLogo = (logoNumber: number): void => {
    setSelectedLogo(logoNumber);
    setIsDropdownOpen(false);
  };

  return (
    <header className="h-12 bg-#0000000D w-full flex items-center justify-between px-4 shadow-sm relative">
      {/* Left Navigation Section */}
      <div className="flex items-center space-x-4">
        {/* Navigation Toggle */}
        <div className="flex space-x-1">
          <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
            <FaAngleLeft className="text-sm" />
          </button>
          <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
            <FaAngleRight className="text-sm" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-1">
          <Link 
            href="/tabs/Projects" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/Projects') ? 'bg-gray-400' : ''
            }`}
          >
            Project
          </Link>
          <Link 
            href="/tabs/Property" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/Property') ? 'bg-gray-400' : ''
            }`}
          >
            Property
          </Link>
          <Link 
            href="/tabs/Clients" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/Clients') ? 'bg-gray-400' : ''
            }`}
          >
            Clients
          </Link>
          <Link 
            href="/tabs/Tenants" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/Tenants') ? 'bg-gray-400' : ''
            }`}
          >
            Tenants
          </Link>
          <Link 
            href="/tabs/Agents" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/Agents') ? 'bg-gray-400' : ''
            }`}
          >
            Agents
          </Link>
          <Link 
            href="/tabs/NewList" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors ${
              isActive('/tabs/NewList') ? 'bg-gray-400' : ''
            }`}
          >
            New List
          </Link>
          <Link 
            href="/tabs/Add" 
            className={`font-bold text-gray-700 hover:bg-gray-400 rounded-md p-1 text-sm transition-colors ${
              isActive('/tabs/Add') ? 'bg-gray-400' : ''
            }`}
          >
            <FaPlus />
          </Link>
        </nav>
      </div>

      {/* Logo Dropdown */}
      <div className="flex items-center relative">
        {/* Dropdown Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-700 font-bold text-sm hover:bg-gray-400 rounded-md px-3 py-1 transition-colors"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <FaChevronDown className="ml-2 text-xs" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-10">
            <button
              onClick={() => selectLogo(1)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 flex items-center"
            >
              Logo 1
            </button>
            <button
              onClick={() => selectLogo(2)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 flex items-center"
            >
              Logo 2
            </button>
          </div>
        )}

        {/* Display Selected Logo */}
        <div className="">
          {selectedLogo === 1 ? (
            <Image src={images.HeaderLogo1} alt="Logo 1" width={100} height={110} />
          ) : (
            <Image src={images.HeaderLogo2} alt="Logo 2" width={100} height={110} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header2;