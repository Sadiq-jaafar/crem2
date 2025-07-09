import React from 'react';
import { UsersIcon } from 'lucide-react';

interface SettingsCardProps {
  settingName: string;
  purpose: string;
  id: string;
  onSettingsClick?: () => void;
}

const SettingsCard = ({ onSettingsClick, settingName, purpose, id }: SettingsCardProps) => {
  if (!id) return null;

  return (
    <div
      key={id}
      className="flex w-[293px] h-[106px] bg-white m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer"
      onClick={onSettingsClick}
    >
      <div className="bg-gray-300 w-[82px] flex items-center justify-center p-4">
        <UsersIcon className="text-green-900" />
      </div>
      <div className="p-4 bg-white space-y-2">
        <h2 className="font-bold text-[12px]">{settingName}</h2>
        <div className="text-[10px]">{purpose}</div>
      </div>
    </div>
  );
};

export default SettingsCard;
