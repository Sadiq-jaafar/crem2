"use client"

import Header3 from '@/Components/Header3'
import RolePermissionsCard from '@/Components/RolePermissionsCard'
import React, { useState } from 'react'
import icons from '../../../../../../constants/icons'
import MembersTable, { Member } from '@/Components/MembersTable'


const initialMembers: Member[] = [
  {
    id: '001',
    fullName: 'John Doe',
    email: 'john@example.com',
    address: 'ABU Zaria',
    phone1: '08012345678',
    phone2: '08123456789',
    department: 'ICT',
  },
  // Add more initial members as needed
];

const Departments = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);

  const handleAddMember = () => {
    const newMember: Member = {
      id: '',
      fullName: '',
      email: '',
      address: '',
      phone1: '',
      phone2: '',
      department: '',
    };
    setMembers([...members, newMember]);
  };
  return (
     <div className='max-h-screen overflow-auto scrollbar-none'>
        <Header3 name='Departments/Teams>Aminidtration'/>
        <div className="flex  flex-col  bg-gray-100  mb-8 ">

          <RolePermissionsCard
          image={icons.Settings}
          name='Department Overview'
           permissions={[
          { label: 'Status', status: 'Active' },
          { label: 'Add User', status: 'Active' },
          { label: 'Add Clients/Tenants/Agents', status: 'Active' },
          { label: 'See Clients/Tenants/Agents Details', status: 'Active' },
          { label: 'Allocation', status: 'Active' },
        ]} />
          <RolePermissionsCard
          image={icons.Settings}
          name='Role Permissions'
           permissions={[
          { label: 'Status', status: 'Active' },
          { label: 'Add User', status: 'Active' },
          { label: 'Add Clients/Tenants/Agents', status: 'Active' },
          { label: 'See Clients/Tenants/Agents Details', status: 'Active' },
          { label: 'Allocation', status: 'Active' },
        ]} />

       <MembersTable members={members} onAddMember={handleAddMember} />
        </div>


        </div>
  )
}

export default Departments