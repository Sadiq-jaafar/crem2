"use client";
import Image from 'next/image';
import React from 'react';
import images from '../../constants/images';
import {  FaChevronDown } from 'react-icons/fa';
import { useLogo } from './LogoContext';
import icons from '../../constants/icons';
import { useRouter } from 'next/navigation';
// import { primary } from '../../constants/colors';

function Header() {
  const { selectedLogo, setSelectedLogo } = useLogo();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  const navigation = useRouter();

  React.useEffect(() => {
    // Can go back if history length > 1
    setCanGoBack(window.history.length > 1);
    // Can go forward if history.state.idx < history.length - 1 (Chrome/modern browsers)
    // Fallback: always enable forward, or track yourself for more accuracy
    setCanGoForward(!!window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx < window.history.length - 1);
  }, []);

  const onBack = () => {
    navigation.back();
  }
  const onForward = () => {
    navigation.forward();
  }

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLogo = (logoNumber: number): void => {
    setSelectedLogo(logoNumber);
    setIsDropdownOpen(false);
  };

  return (
    <div className="h-[25vh] xl:h-[142px] relative block absoluterounded-b-lg">
     <div className="">
      <Image
        src={images.Header}
        alt="Header Background"
        fill
        style={{ objectFit: 'cover', overflow: 'hidden' }}
        className='rounded-b-lg'
      />
      <div className=" top-1 2xl:top-10 space-x-1">
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex items-center relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center pl-[1.5px] w-5 h-10 text-gray-700 font-bold text-sm hover:bg-gray-200 rounded-md transition-colors"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <FaChevronDown className=" p-0 text-xs" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 2xl:w-[200px] 2xl:h-[200px] w-50 bg-white rounded-md shadow-lg z-10">
              <div className="flex items-center justify-center text-center text-gray-700 font-bold text-sm hover:bg-gray-200 rounded-md transition-colors">Stations</div>
              <button
                onClick={() => selectLogo(1)}
                className="w-full text-left h-[50%] px-4 2xl:text-[50px] py-2 mb text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Rural Homes Limited
              </button>
              <button
                onClick={() => selectLogo(2)}
                className="w-full text-left h-[50%] px-4 py-2 2xl:text-[50px] text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Homes Group Limited
              </button>
              <button
                onClick={() => selectLogo(2)}
                className="w-full text-left h-[50%] px-4 py-2 2xl:text-[50px] text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Add New Station
              </button>
            </div>
          )}

          <div className=" mb-0 ">
            {selectedLogo === 1 ? (
              <Image src={images.HeaderLogo1} alt="Logo 1" width={110} height={250} className='2xl:w-[380px] 2xl:h-[370px] xl:w-[150px] xl:h-[75px]' />
            ) : (
              <Image src={images.HeaderLogo2} alt="Logo 2" width={110} height={200} className='2xl:w-[380px] 2xl:h-[370px] xl:w-[120px] xl:h-[75px]' />
            )}
          </div>
        </div>
        <div className={`justify-between align-bottom relative px-2 mx-8 ${selectedLogo === 1 ?"m-[0px] 2xl:mt-0":"mt-0"}  w-full m flex flex-row" style={{color: primary}}`}>
          <div className='font-bold text-2xl 2xl:text-[80px] mt-2'>Welocme, Ibrahim!</div>
          <div className='font-bold mt-4 2xl:text-[80px]'>Admistration</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;