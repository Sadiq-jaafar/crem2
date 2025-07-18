// components/DepartmentCard.tsx
import React from 'react';
import { UsersIcon } from 'lucide-react';

interface DepartmentEntry {
  departmentName: string;
  purpose: string;
  members: number;
  lead: string;
  id: string;
}

type DepartmentCardProps = {
  departments?: DepartmentEntry[]; // made optional to reflect actual runtime
  onDepartmentClick?: (department: DepartmentEntry) => void;
};

const DepartmentCard: React.FC<DepartmentCardProps> = ({ departments = [], onDepartmentClick }) => {
  if (departments.length === 0) return null;

  return (
    <>
      {departments.map((department) => (
        <div
          key={department.id}
          className="flex w-[293px] h-[106px] bg-white dark:bg-gray-800 m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer transition-colors"
          onClick={() => onDepartmentClick?.(department)}
        >
          <div className="bg-gray-300 dark:bg-gray-700 w-[82px] flex items-center justify-center p-4 transition-colors">
            <UsersIcon className="text-green-900" />
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 space-y-2 transition-colors">
            <h2 className="font-bold text-[12px]">{department.departmentName}</h2>
            <p className="text-[10px]"><strong>Purpose:</strong> {department.purpose}</p>
            <p className="text-[10px]"><strong>Members:</strong> {department.members}</p>
            <p className="text-[10px]"><strong>Lead:</strong> {department.lead}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DepartmentCard;
