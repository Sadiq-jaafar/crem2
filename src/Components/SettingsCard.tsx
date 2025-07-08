// components/DepartmentCard.tsx
import React from 'react';
import { UsersIcon } from 'lucide-react';

interface SettingsEntry {
  settingName: string;
  purpose: string;
  
  id: string;
}

type DepartmentCardProps = {
  settings?: SettingsEntry[]; // made optional to reflect actual runtime
  onSettingsClick?: (setting: SettingsEntry) => void;
};

const SettingsCard: React.FC<DepartmentCardProps> = ({ settings = [], onSettingsClick }) => {
  if (settings.length === 0) return null;

  return (
    <>
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex w-[293px] h-[106px] bg-white m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer"
          onClick={() => onSettingsClick?.(setting)}
        >
          <div className="bg-gray-300 w-[82px] flex items-center justify-center p-4">
            <UsersIcon className="text-green-900" />
          </div>
          <div className="p-4 bg-white space-y-2">
            <h2 className="font-bold text-[12px]">{setting.settingName}</h2>
            <div className="text-[10px]"> {setting.purpose}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SettingsCard;
