// components/RolePermissionsCard.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Permission {
  label: string;
  status: 'Active' | 'Inactive';
}

interface RolePermissionsCardProps {
  name: string;
  image: string | StaticImageData; // should be a valid `src` string (URL or imported image path)
  permissions: Permission[];
}

const RolePermissionsCard: React.FC<RolePermissionsCardProps> = ({ name, image, permissions }) => {
  return (
    <div className="rounded-xl m-6 w-[788px] not-first:h-[207px] shadow-md bg-white dark:bg-gray-800 max-w-3xl overflow-hidden transition-colors">
      <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 px-4 py-2 transition-colors">
        <h3 className="text-[14px] font-semibold">{name}</h3>
         <span className="text-gray-500 dark:text-gray-300">{<Image
          src={image}
          alt={`${name} icon`}
          width={24}
          height={24}
          
        />}</span>
        
      </div>
      <div className="p-4 space-y-1">
        {permissions.map((perm, index) => (
          <p className='text-[12px] dark:text-gray-200' key={index}>
            <strong>{perm.label}:</strong>{' '}
            <span className={`text-[10px] ${perm.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
              {perm.status}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RolePermissionsCard;
