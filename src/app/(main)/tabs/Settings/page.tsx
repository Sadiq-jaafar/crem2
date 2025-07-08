"use client"
import SettingsCard from '@/Components/SettingsCard';

import { useRouter } from 'next/navigation';
import React from 'react'

type SettingsEntry ={
  settingName: string;
  purpose: string;

  id: string;
}
const settingsEntries: SettingsEntry[] = [
  { settingName: 'Comp Eng', purpose: 'Research and Dev',  id: '1' },
 
];  

const SEttings = () => {

   const navigate = useRouter();
  
  const handleSettingtClick = (project: SettingsEntry) => {
    navigate.push(`/${project.id}/department`);
  };
  return (
    <div className='m-6'>
      <div className="">
        <span className="p-4">Personal</span>
        <div className=" grid grid-cols-4">
        <SettingsCard  settings={settingsEntries} onSettingsClick={handleSettingtClick}/>
        </div>
      </div> 
      <div className="">
        <span className="p-4">Personal</span>
        <div className=" grid grid-cols-3 lg:[grid-cols-4] md:[grid-cols-2] sm:[grid-cols-1]">
        <SettingsCard  settings={settingsEntries} onSettingsClick={handleSettingtClick}/>
        <SettingsCard  settings={settingsEntries} onSettingsClick={handleSettingtClick}/>
        </div>
      </div> 
    </div>
  )
}

export default SEttings