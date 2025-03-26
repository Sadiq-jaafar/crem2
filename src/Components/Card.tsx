import React from 'react';
import { primary, secondary } from '../../constants/colors';

interface CardProps {
  logo: string;
  icon: string
}

const Card = ({ logo, icon }:CardProps) => {
  return (
    <div className='w-110 h-45 border border-gray-300 rounded-lg overflow-hidden flex flex-col'>
      {/* Header Section */}
      <div className="h-10  flex items-center justify-between px-4"
        style={{ backgroundColor: primary ,}}>
        <div className="text-white font-bold">{logo}</div>
        <div className="text-white">{icon}</div>
      </div>

      {/* Scrollable List Section */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{ backgroundColor: secondary ,}}> {/* flex-1 makes it occupy remaining space */}
        <ol className="space-y-0 m-0 p-0">
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className="hover:bg-blue-100 border-b border-gray-200 py-2 cursor-pointer m-0 p-0"
            >
              <div className="flex items-center justify-between px-4">
                <div className="text-gray-700">List Item {index + 1}</div>
                <div className="text-gray-500">icon</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;