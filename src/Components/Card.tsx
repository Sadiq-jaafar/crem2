// import React from 'react';
// import { primary, secondary } from '../../constants/colors';

// interface CardProps {
//   logo: string;
//   icon: string
// }

// const Card = ({ logo, icon }:CardProps) => {
//   return (
//     <div className='w-110 h-45 border border-gray-300 rounded-lg overflow-hidden flex flex-col'>
//       {/* Header Section */}
//       <div className="h-10  flex items-center justify-between px-4"
//         style={{ backgroundColor: primary ,}}>
//         <div className="text-white font-bold">{logo}</div>
//         <div className="text-white">{icon}</div>
//       </div>

//       {/* Scrollable List Section */}
//       <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide"
//       style={{ backgroundColor: secondary ,}}> {/* flex-1 makes it occupy remaining space */}
//         <ol className="space-y-0 m-0 p-0">
//           {[...Array(10)].map((_, index) => (
//             <li
//               key={index}
//               className="hover:bg-blue-100 border-b border-gray-200 py-2 cursor-pointer m-0 p-0"
//             >
//               <div className="flex items-center justify-between px-4">
//                 <div className="text-gray-700">List Item {index + 1}</div>
//                 <div className="text-gray-500">icon</div>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Card.tsx
"use client"
import React, { useState } from 'react';
import { primary, secondary } from '../../constants/colors';
import { FaChevronRight, FaCircle, FaEllipsisV } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  items?: string[];
  link: string;
}

const Card = ({ title, icon, link , items = [] }: CardProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePinUnpin = (action: 'pin' | 'unpin') => {
    setIsPinned(action === 'pin');
    setShowDropdown(false);
    // You can add additional logic here for pin/unpin functionality
  };
  const navigate= useRouter()
  const onClick =(link: string)=>{
     navigate.push(link);
    

  }

  return (
    <div className='w-110 h-45 border border-gray-300 rounded-lg overflow-hidden flex flex-col'>
      {/* Header Section with icon next to title */}
      <div 
        className="flex justify-between items-center cursor-pointer"
        style={{ backgroundColor: primary }}
        onClick= {()=> onClick(link)}
      >
        <div className="h-12 flex items-center px-4 gap-3 flex-1">
          <div className="text-white">
            {icon}
          </div>
          <div className="text-white font-bold text-sm">{title}</div>
        </div>

        {/* Kebab Menu */}
        <div className="relative pr-4">
          <button 
            onClick={toggleDropdown}
            className="text-white p-1 focus:outline-none hover:bg-[#77898D] rounded-full cursor-pointer"
          >
            <FaEllipsisV />
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  onClick={() => handlePinUnpin('pin')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Pin
                </button>
                <button
                  onClick={() => handlePinUnpin('unpin')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Unpin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scrollable List Section */}
      <div 
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-hide"
        style={{ backgroundColor: secondary }}
      >
        {items.length > 0 ? (
          <ul className="">
            {/* className="divide-y divide-gray-200 */}
            {items.map((item, index) => (
              <li
                key={index}
                className=" px-4 py-3 cursor-pointer flex items-center hover:bg-[#09342D] justify-between"
              >
                <div className="text-gray-700 text-xs flex items-center gap-2">
                  <FaCircle className="text-gray-400" size={8} />
                  {item} #{index + 1}
                </div>
                <FaChevronRight className="text-gray-400" size={12} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            No items available
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;