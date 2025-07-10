"use client";
import React from 'react';

import { useRouter } from 'next/navigation';
import SettingsCard from '@/Components/SettingsCard';
import SettingsCard2 from '@/Components/SettingsCard2';

const SEttings = () => {
  const navigate = useRouter();

  const handleSettingPersonal = () => navigate.push("/profile");
  const handleSettingCompany = () => navigate.push("/company");
  const handleSettingSub = () => navigate.push("/subscription");

  return (
    <div className="">
    <div className='m-6'>
      <div>
        <span className="p-4 font-bold">Personal</span>
        <div className="grid grid-cols-4">
          <SettingsCard
            id='1'
            purpose='Edit names, address, emails, and Photos'
            settingName="Personal Information"
            onSettingsClick={handleSettingPersonal}
          />
        </div>
      </div>

      <div>
        <span className="p-4 font-bold">Company</span>
        <div className="flex flex-wrap">
          <SettingsCard
            id='2'
            purpose='Edit company names, address, emails, and Photos'
            settingName="Company Information"
            onSettingsClick={handleSettingCompany}
          />
          <SettingsCard
            id='3'
            purpose='Manage your subscriptions and billing info'
            settingName="Subscription"
            onSettingsClick={handleSettingSub}
          />
        </div>
        <div>
        <span className="p-4 font-bold">Display</span>
        <div className="grid grid-cols-4">
          
          <SettingsCard2/>
        </div>
      </div>

      </div>
    </div>
    </div>
  );
};

export default SEttings;
