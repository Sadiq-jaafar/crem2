"use client"
import React, { useState } from 'react'
import images from '../../../../../constants/images'
import Image from 'next/image'

const Tenants = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
 const [selectedDeleteId, setSelectedDeleteId] = useState<number | null>(null);

  return (
    <div>           <div className='ml-6 mt-6 mb-4'>
     <div className="flex  items-center mb-4">
             
             <div className="mr-10 bg-gray-100 border-none">
  <select defaultValue="all">
    <option value="all" className='bg-gray-100 border-none'>All Tenants List</option>
    <option value="karmo"className='bg-gray-100 border-none'>Karmo Market Tenant List</option>
    <option value="jabi"className='bg-gray-100 border-none'>Jabi Tenant List</option>
    <option value="fountain"className='bg-gray-100 border-none'>Fountain View Tenant List</option>
    <option value="alaba"className='bg-gray-100 border-none'>Alaba Market Tenant List</option>
  </select>
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
            <th className=" p-1 text-left text-gray-600 text-[11px] border-b font-medium">Property</th>
            <th className=" p-1 text-left text-gray-600 text-[11px] border-b font-medium">Type</th>
            <th className=" p-1 text-left text-gray-600 text-[11px] border-b font-medium">Unit</th>
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">Rent Duration</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Price</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Rent Status</th>
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
              <td className=" text-[11px] border-b text-gray-700">House</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">Duplex</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">1</td>
              <td className=" text-[11px] border-b text-gray-700">5 years</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">20000</td>
              
              <td className=" p-2 text-[11px] border-b text-gray-700">{idx % 2 === 0 ?  
                      <span className="text-red-600 ">Not Acrive</span>:
                       <span className="text-green-600">Active</span>}
                    </td>
            
              <td className="border-b">
                <div className="flex p-2 gap-2">
                  <button className="text-[11px] bg-gray-200 px-3 py-1 rounded text-gray-700 text-sm">View</button>
                  <button className="text-[11px] bg-gray-200 px-3 py-1 rounded text-gray-700 text-sm">Edit</button>
                  <button
  className="text-[11px] bg-gray-200 px-3 cursor-pointer py-1 rounded text-gray-700 text-sm"
  onClick={() => {
    setSelectedDeleteId(sn); // you can replace this with a unique ID if available
    setShowDeleteDialog(true);
  }}
>
  Delete
</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {showDeleteDialog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30">
    <div className="bg-white rounded-md p-6 shadow-lg min-w-[300px]">
      <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
      <p className="mb-6 text-sm text-gray-700">Are you sure you want to delete the profile of as member?</p>
      <div className="flex justify-end gap-4">
        <button
          className=" text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => setShowDeleteDialog(false)}
        >
          Cancel
        </button>
        <button
          className="bg-[#09342D] text-white px-4 py-2 cursor-pointer rounded hover:bg-red-700"
          onClick={() => {
            // TODO: perform deletion logic
            console.log('Deleting item with ID:', selectedDeleteId);

            // close dialog after delete
            setShowDeleteDialog(false);
            setSelectedDeleteId(null);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
  </div></div>
  )
}

export default Tenants;