"use client";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaAngleLeft, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import images from "../../constants/images";
import { useLogo } from './LogoContext';

interface HeaderProps {
  isCollapsed?: boolean;
}

const Header3: React.FC<HeaderProps> = ({ isCollapsed = false }) => {
  const { selectedLogo, setSelectedLogo } = useLogo();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLogo = (logoNumber: number): void => {
    setSelectedLogo(logoNumber);
    setIsDropdownOpen(false);
  };

  return (
    <header className="h-12 bg-gray-100 relative  w- top-0 flex items-center justify-between px-4 shadow-sm z-40 ">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-1">
          <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
            <FaAngleLeft className="text-sm" />
          </button>
          <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
            <FaAngleRight className="text-sm" />
          </button>
        </div>

        <nav className="flex items-center space-x-1">
          <Link
            href="/memolist"
            className="font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors"
          >
            Memos
          </Link>
        </nav>
      </div>

      <div className="flex items-center relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-700 font-bold text-sm hover:bg-gray-400 rounded-md px-3 py-1 transition-colors"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <FaChevronDown className="ml-2 text-xs" />
        </button>

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

        <div className="h-12 flex items-center">
          {selectedLogo === 1 ? (
            <Image src={images.HeaderLogo1} alt="Logo 1" width={100} height={44} className="object-contain" />
          ) : (
            <Image src={images.HeaderLogo2} alt="Logo 2" width={100} height={44} className="object-contain" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header3;