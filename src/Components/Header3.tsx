"use client";
import Link from "next/link";
import React from "react";
import {  FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import images from "../../constants/images";
import { useLogo } from './LogoContext';
import icons from "../../constants/icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  isCollapsed?: boolean;
  name: string;
}

const Header3: React.FC<HeaderProps> = ({  name }) => {
  const { selectedLogo, setSelectedLogo } = useLogo();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const navigation = useRouter();
  const onBack = () => {
    navigation.back();
  };

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
           <button 
           onClick={onBack}
           className="text-gray-700 hover:bg-gray-400 p-1 rounded">
                       <Image
                         src={icons.leftAr}
                        alt="Left Arrow"
                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10"
                       width={40}
                      height={40}
                      />
                    </button>
                    <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
                       <Image
                              src={icons.rightAr}
                              alt="Right Arrow"
                              className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10"
                              width={40}
                              height={40}
                            />
                    </button>
        </div>

        <nav className="flex items-center space-x-1">
          <Link
            href="/memolist"
            className="font-bold text-gray-700 hover:bg-gray-400 rounded-md px-3 py-1 text-sm transition-colors"
          >
            {name}
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