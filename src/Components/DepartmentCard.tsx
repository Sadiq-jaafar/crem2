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
          className="flex w-[293px] h-[106px] bg-white m-4 rounded-xl shadow-md max-w-md overflow-hidden cursor-pointer"
          onClick={() => onDepartmentClick?.(department)}
        >
          <div className="bg-gray-300 w-[82px] flex items-center justify-center p-4">
            <UsersIcon className="text-green-900" />
          </div>
          <div className="p-4 bg-white space-y-2">
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
