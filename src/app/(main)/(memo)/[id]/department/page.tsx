"use client"

import Header3 from '@/Components/Header3'
import RolePermissionsCard from '@/Components/RolePermissionsCard'

import icons from '../../../../../../constants/icons'
import images from '../../../../../../constants/images'
import Image from 'next/image';
import { Search } from 'lucide-react'



// const initialMembers: Member[] = [
//   {
//     id: '001',
//     fullName: 'John Doe',
//     email: 'john@example.com',
//     address: 'ABU Zaria',
//     phone1: '08012345678',
//     phone2: '08123456789',
//     department: 'ICT',
//   },
//   // Add more initial members as needed
// ];

const Departments = () => {
  // const [members, setMembers] = useState<Member[]>(initialMembers);

  // const handleAddMember = () => {
  //   const newMember: Member = {
  //     id: '',
  //     fullName: '',
  //     email: '',
  //     address: '',
  //     phone1: '',
  //     phone2: '',
  //     department: '',
  //   };
  //   setMembers([...members, newMember]);
  // };
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

       
        </div>

            <div className='ml-6 mt-6 mb-4'>
     <div className="flex  items-center mb-4">
              <span className="mr-10">Members Overview</span>
              <div className="flex-1  relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[588px] ml-4 pl-8 pr-2 py-1 rounded-full border border-gray-300 bg-gray-100 text-sm placeholder:text-sm placeholder-teal-700"
                />

                <Search className="absolute left-142 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                <span className="absolute pb-[5px] mb-[4px] left-139 top-1/2 transform -translate-y-1/2 text-black">|</span>
              </div>
            </div>
     <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg">
        <thead>
          <tr className="">
            <th className=" text-left text-gray-600 text-[11px] font-[11.85px]">SN</th>
            <th className="py-2 pl-0 px-4 text-left text-gray-600 text-[11px] border-b font-medium">Photo</th>
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">Owner Name</th>
            <th className=" p-1 text-left text-gray-600 text-[11px] border-b font-medium">Contact info</th>
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">User Id</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Role</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Status</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1,2,3,4,5].map((sn, idx) => (
            <tr key={sn} className="">
              <td className=" mr-8 pr-8 text-gray-700 text-[11px] font-medium border-none ">{`0${sn}`}</td>
              <td className="py-3 ml-0 pl-0 border-b px-4">
                <Image
                  src={images.Profile}
                  alt="Owner"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className=" text-[11px] border-b text-gray-700">Ibrahim Sani Tambaya</td>
              <td className="p-2 border-b">
                <div className=" text-[11px]  text-gray-700">+2348062910352</div>
                <div className="text-[11px]  text-green-700">ibtambaya@gmail.com</div>
              </td>
              <td className=" text-[11px] border-b text-gray-700">RHL/ADM/03</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">{idx % 1 === 0 ? "lead" : "member"}</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">Active</td>
              <td className="border-b">
                <div className="flex p-2 gap-2">
                  <button className="text-[11px] bg-gray-200 px-3 py-1 rounded text-gray-700 text-sm">View</button>
                  <button className="text-[11px] bg-gray-200 px-3 py-1 rounded text-gray-700 text-sm">Edit</button>
                  <button className="text-[11px] bg-gray-200 px-3 py-1 rounded text-gray-700 text-sm">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
        </div>
  )
}

export default Departments