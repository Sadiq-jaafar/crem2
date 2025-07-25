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
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  const navigation = useRouter();

  React.useEffect(() => {
    setCanGoBack(window.history.length > 1);
    setCanGoForward(!!window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx < window.history.length - 1);
  }, []);

  const onBack = () => {
    navigation.back();
  };
  const onForward = () => {
    navigation.forward();
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
           className="text-gray-700 hover:bg-gray-400 p-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
           disabled={!canGoBack}
           >
                       <Image
                         src={icons.leftAr}
                        alt="Left Arrow"
                        className='2xl:w-15 2xl:h-15'
                        width={20}
                        height={20}
                       />
                    </button>
                    <button 
  onClick={onForward}
  className="text-gray-700 hover:bg-gray-400 p-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={!canGoForward}
>
  <Image
    src={icons.rightAr}
    alt="Right Arrow"
    className='2xl:w-15 2xl:h-15'
    width={20}
    height={20}
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