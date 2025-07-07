import React from 'react';

export interface Member {
  id: string;
  fullName: string;
  email: string;
  address: string;
  phone1: string;
  phone2?: string;
  department: string;
}

interface MembersTableProps {
  members: Member[];
  onAddMember?: () => void;
}

const columnClass = "border px-2 py-1 min-w-[160px] h-[27.7px]";
const snClass = "border px-2 py-1 w-[60px] h-[27.7px] text-center"; // SN column exception

const MembersTable: React.FC<MembersTableProps> = ({ members, onAddMember }) => {
  return (
    <div className="overflow-x-auto mt-6 rounded-xl shadow-md bg-white p-4">
      <h2 className="text-lg font-semibold mr-4 mb-2">Members ({members.length})</h2>
      <table className="table-auto border-collapse w-full text-sm">
        <thead className="bg-green-900 text-white">
          <tr>
            <th className={snClass}>SN</th>
            <th className={columnClass}>ID</th>
            <th className={columnClass}>Full Name</th>
            <th className={columnClass}>Email</th>
            <th className={columnClass}>Address</th>
            <th className={columnClass}>Phone number(1)</th>
            <th className={columnClass}>Phone number(2)</th>
            <th className={columnClass}>Department</th>
            
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id || `member-${index}`} className="text-center bg-gray-100 even:bg-white">
              <td className={snClass}>{index + 1}</td>
              <td className={columnClass}>{member.id}</td>
              <td className={columnClass}>{member.fullName}</td>
              <td className={columnClass}>{member.email}</td>
              <td className={columnClass}>{member.address}</td>
              <td className={columnClass}>{member.phone1}</td>
              <td className={columnClass}>{member.phone2 || '-'}</td>
              <td className={columnClass}>{member.department}</td>
            </tr>
          ))}
          <tr key="add-member-row" className="text-center bg-gray-300 cursor-pointer" onClick={onAddMember}>
            <td className={snClass + " font-bold"}>+</td>
            <td className={columnClass} colSpan={7}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
