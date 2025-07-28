"use client"
import DepartmentCard from '@/Components/DepartmentCard'
import { useRouter } from 'next/navigation';

import React from 'react'

type DepartmentEntry = {
  departmentName: string;
  purpose: string;
  members: number;
  lead: string;
  id: string;
}

const departmentEntries: DepartmentEntry[] = [
  { departmentName: 'Comp Eng', purpose: 'Research and Dev', members: 2, lead: 'Sufi', id: '1' },
  { departmentName: 'Marketing', purpose: 'Brand Promotion', members: 5, lead: 'Alex', id: '2' },
  { departmentName: 'Sales', purpose: 'Customer Engagement', members: 3, lead: 'Jordan', id: '3' },

  { departmentName: 'HR', purpose: 'Employee Relations', members: 4, lead: 'Taylor', id: '4' },
  { departmentName: 'Finance', purpose: 'Budget Management', members: 3, lead: 'Morgan', id: '5' },
  { departmentName: 'IT Support', purpose: 'Technical Assistance', members: 2, lead: 'Jamie', id: '6' },
  { departmentName: 'Legal', purpose: 'Compliance and Contracts', members: 1, lead: 'Casey', id: '7' },
];  

const Departments = () => {
   const navigate = useRouter();

  // Pass the navigation handler to ProjectCard instead
  const handleDepartmentClick = (project: DepartmentEntry) => {
    navigate.push(`/${project.id}/department`);
  };
  return (
    <div className="grid grid-cols-3 w-full h-full overflow-auto scrollbar-none bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
     <DepartmentCard  departments={departmentEntries} onDepartmentClick={handleDepartmentClick} />
     
     </div>)}

export default Departments