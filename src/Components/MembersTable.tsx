import React, { useState } from 'react';

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
  onAddMember?: (newMember: Member) => void;
}

const columnClass = "border px-2 py-1 min-w-[160px] h-[27.7px]";
const snClass = "border px-2 py-1 w-[60px] h-[27.7px] text-center"; // SN column exception

const MembersTable: React.FC<MembersTableProps> = ({ members, onAddMember }) => {
  const [showForm, setShowForm] = useState(false);
  const [newMember, setNewMember] = useState<Member>({
    id: '',
    fullName: '',
    email: '',
    address: '',
    phone1: '',
    phone2: '',
    department: '',
  });

  const handleInputChange = (field: keyof Member, value: string) => {
    setNewMember((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (onAddMember) {
      onAddMember(newMember);
      setNewMember({
        id: '',
        fullName: '',
        email: '',
        address: '',
        phone1: '',
        phone2: '',
        department: '',
      });
      setShowForm(false);
    }
  };

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
            <th className={columnClass}>QL</th>
            <th className={columnClass}>Department</th>
            <th className={columnClass}>State</th>
            {onAddMember && <th className={columnClass}>+</th>}
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
              <td className={columnClass}>{member.department}</td>
              <td className={columnClass}>{member.department}</td>
              {onAddMember && <td className={columnClass}></td>}
            </tr>
          ))}

          {showForm ? (
            <tr className="text-center bg-yellow-50">
              <td className={snClass}>#</td>
              <td className={columnClass}>
                <input
                  value={newMember.id}
                  onChange={(e) => handleInputChange('id', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.phone1}
                  onChange={(e) => handleInputChange('phone1', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.phone2}
                  onChange={(e) => handleInputChange('phone2', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass}>
                <input
                  value={newMember.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-1 py-0.5 border rounded"
                />
              </td>
              <td className={columnClass + " flex gap-2 justify-center"}>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            onAddMember && (
              <tr
                className="text-center bg-gray-300 cursor-pointer hover:bg-gray-400"
                onClick={() => setShowForm(true)}
              >
                <td className={snClass + " font-bold"}>+</td>
                <td className={columnClass} colSpan={10}></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
