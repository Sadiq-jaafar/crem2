
import React from 'react';
import Image from 'next/image';
import images from '../../constants/images';
import { FaChevronDown } from 'react-icons/fa';
import { useLogo } from './LogoContext';


const MemoLogo = () => {
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
    <div className="flex flex-col items-center">
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
      
                <div className="">
                  {selectedLogo === 1 ? (
                    <Image src={images.HeaderLogo1} alt="Logo 1" width={110} height={62} />
                  ) : (
                    <Image src={images.HeaderLogo2} alt="Logo 2" width={110} height={62} />
                  )}
                </div>
              </div>
    </div>
  );
};

export default MemoLogo;
