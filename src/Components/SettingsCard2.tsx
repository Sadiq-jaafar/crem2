// "use client";
// import React, { useState } from 'react';
// import { UsersIcon } from 'lucide-react';



// const SettingsCard = () => {
//     const [isChecked, setIsChecked] = useState(false);
  

//   return (
//     <div
     
//       className="flex w-[293px] h-[106px] bg-white m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer"
     
//     >
//       <div className="bg-gray-300 w-[82px] flex items-center justify-center p-4">
//         <UsersIcon className="text-green-900" />
//       </div>
//       <div className="p-4 bg-white space-y-2">
//         <h2 className="font-bold text-[12px]">Themess</h2>
//         <div className="text-[10px] flex items-center justify-between">
//           <span>system themes</span>  
//            <label className="relative inline-block w-[60px] h-[34px]">
//       <input
//         type="checkbox"
//         className="opacity-0 w-0 h-0"
//         checked={isChecked}
//         onChange={() => setIsChecked(!isChecked)}
//       />
//       <span
//         className={`
//           absolute cursor-pointer top-0 left-0 right-0 bottom-0
//           bg-gray-300 transition duration-400 rounded-full
//           ${isChecked ? 'bg-blue-500' : ''}
//         `}
//       >
//         <span
//           className={`
//             absolute bottom-[4px] left-[4px] h-[26px] w-[26px] bg-white rounded-full transition-transform duration-400
//             ${isChecked ? 'translate-x-[26px]' : ''}
//           `}
//         />
//       </span>
//     </label>
          
//         </div>
//         <div className="text-[10px]">
//           <span>Dark mode</span>  
          
//         </div>
//         <div className="text-[10px]">
//           <span>Light mode</span>  
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsCard;

import React from 'react';
import { Settings } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeCard: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleSystemToggle = () => setTheme('system');
  const handleLightToggle = () => setTheme('light');
  const handleDarkToggle = () => setTheme('dark');

  return (
    <div className="flex w-[293px] h-[123px] bg-white m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer">
      <div className="bg-gray-300 w-[82px] flex items-center justify-center p-4">
        <Settings className="text-green-900" />
      </div>
      <div className="flex flex-col justify-center px-4 py-2 space-y-2">
        <h2 className="font-bold text-[12px]">Themes</h2>
        <div className="flex justify-between items-center text-[12px]">
          <span>System theme</span>
          <input
            type="checkbox"
            className=" ml-16 w-10 h-5 rounded-full bg-gray-300 checked:bg-green-500 appearance-none relative transition-all duration-300
             before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-full 
             before:bg-white before:transition-all before:duration-300 checked:before:translate-x-5"
            checked={theme === 'system'}
            onChange={handleSystemToggle}
          />
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <span>Light Mode</span>
          <input
            type="checkbox"
             className="w-10 h-5 rounded-full bg-gray-300 checked:bg-green-500 appearance-none relative transition-all duration-300
             before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-full 
             before:bg-white before:transition-all before:duration-300 checked:before:translate-x-5"
            checked={theme === 'light'}
            onChange={handleLightToggle}
          />
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <span>Dark Mode</span>
          <input
            type="checkbox"
             className="w-10 h-5 rounded-full bg-gray-300 checked:bg-green-500 appearance-none relative transition-all duration-300
             before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:rounded-full 
             before:bg-white before:transition-all before:duration-300 checked:before:translate-x-5"
            checked={theme === 'dark'}
            onChange={handleDarkToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
