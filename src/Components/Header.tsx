// "use client";
// import Image from 'next/image';
// import React from 'react';
// import images from '../../constants/images';
// import { useHeaderState } from './Header2';
// import { FaChevronDown } from 'react-icons/fa';


// // interface useHeaderStateProps{
// //   isDropdownOpen: boolean;
// //   selectedLogo: number;
// //   toggleDropdown: () => void;
// //   selectLogo: (logoNumber: number) => void;
// // }


// function Header() {
//   const { isDropdownOpen, selectedLogo, toggleDropdown, selectLogo } =
//   useHeaderState();
//   return (
//     <div
//       className="h-[156px] relative "
//       // style={{ width: '100vw' }}
//     >
//       {/* Background Image */}
//       <Image
//         src={images.Header}
//         alt="Header Background"
//         fill // Fill the parent container
//         style={{ objectFit: 'cover' }} // Ensure the image covers the entire div
//       />

//       {/* Placeholder Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <div className="flex items-center relative">
//                 {/* Dropdown Toggle Button */}
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center text-gray-700 font-bold text-sm hover:bg-gray-400 rounded-md px-3 py-1 transition-colors"
//                   aria-expanded={isDropdownOpen}
//                   aria-haspopup="true"
//                 >
//                   <FaChevronDown className="ml-2 text-xs" />
//                 </button>
        
//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-10">
//                     <button
//                       onClick={() => selectLogo(1)}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 flex items-center"
//                     >
//                       Logo 1
//                     </button>
//                     <button
//                       onClick={() => selectLogo(2)}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 flex items-center"
//                     >
//                       Logo 2
//                     </button>
//                   </div>
//                 )}
        
//                 {/* Display Selected Logo */}
//                 <div className="">
//                   {selectedLogo === 1 ? (
//                     <Image src={images.HeaderLogo1} alt="Logo 1" width={100} height={110} />
//                   ) : (
//                     <Image src={images.HeaderLogo2} alt="Logo 2" width={100} height={110} />
//                   )}
//                 </div>
//               </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
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

  const navigation = useRouter();
  const onBack = () => {
    navigation.back();
  }

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLogo = (logoNumber: number): void => {
    setSelectedLogo(logoNumber);
    setIsDropdownOpen(false);
  };

  return (
    <div className="h-[25vh] relative block absoluterounded-b-lg">
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
                className="text-gray-700 hover:bg-gray-400 p-1 rounded">
                  <Image
                    src={icons.leftAr}
                    alt="Left Arrow"
                     className='2xl:w-15 2xl:h-15'
                    width={20}
                    height={20}
                  />
                </button>
                <button className="text-gray-700 hover:bg-gray-400 p-1 rounded">
                  <Image
                    src={icons.rightAr}
                    alt="Left Arrow"
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
            className="flex items-center pl-[1.5px] w-4 h-8 text-gray-700 font-bold text-sm hover:bg-gray-400 rounded-md transition-colors"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <FaChevronDown className=" p-0 text-xs" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 2xl:w-[200px] 2xl:h-[200px] w-40 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={() => selectLogo(1)}
                className="w-full text-left h-[50%] px-4 2xl:text-[50px] py-2 mb text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Logo 1
              </button>
              <button
                onClick={() => selectLogo(2)}
                className="w-full text-left h-[50%] px-4 py-2 2xl:text-[50px] text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Logo 2
              </button>
            </div>
          )}

          <div className=" mb-0 ">
            {selectedLogo === 1 ? (
              <Image src={images.HeaderLogo1} alt="Logo 1" width={110} height={250} className='2xl:w-[380px] 2xl:h-[370px]' />
            ) : (
              <Image src={images.HeaderLogo2} alt="Logo 2" width={110} height={200} className='2xl:w-[380px] 2xl:h-[370px]' />
            )}
          </div>
        </div>
        <div className={`justify-between align-bottom relative px-2 mx-8 ${selectedLogo === 1 ?"m-[37px] 2xl:mt-0":"mt-0"}  w-full m flex flex-row" style={{color: primary}}`}>
          <div className='font-bold text-2xl 2xl:text-[80px] mt-2'>Welocme, Ibrahim!</div>
          <div className='font-bold mt-4 2xl:text-[80px]'>Admistration</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;