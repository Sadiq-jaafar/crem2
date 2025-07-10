import React from 'react'
import images from '../../../../../constants/images'
import Image from 'next/image'

const Clients = () => {
  return (
    <div>           <div className='ml-6 mt-6 mb-4'>
     <div className="flex  items-center mb-4">
              <div className="mr-10 bg-gray-100 border-none">
  <select defaultValue="all">
    <option value="all" className='bg-gray-100 border-none font-medium'>All Clients List</option>
    <option value="karmo"className='bg-gray-100 border-none font-medium'>Karmo Market Clients List</option>
    <option value="jabi"className='bg-gray-100 border-none font-medium'>Jabi Clients List</option>
    <option value="fountain"className='bg-gray-100 border-none font-medium'>Fountain View Clients List</option>
    <option value="alaba"className='bg-gray-100 border-none font-medium'>Alaba Market Clients List</option>
  </select>
</div>
             
            </div>
     <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg">
        <thead>
          <tr className="">
            <th className=" text-left text-black text-sm font-[11.85px]">SN</th>
            <th className="py-2 pl-0 px-4 text-left text-black text-sm border-b font-medium">Photo</th>
            <th className=" text-left text-black text-sm border-b font-medium">Owner Name</th>
            <th className=" p-1 text-left text-black text-sm border-b font-medium">Contact info</th>
            <th className=" p-1 text-left text-black text-sm border-b font-medium">Country</th>
            <th className=" p-1 text-left text-black text-sm border-b font-medium">State</th>
            <th className=" p-1 text-left text-black text-sm border-b font-medium">City/Town</th>
            <th className=" text-left text-black text-sm border-b font-medium">Property owened</th>
            <th className=" p-2 text-left text-black text-sm border-b font-medium">Date Added</th>
            <th className=" p-2 text-left text-black text-sm border-b font-medium">Payment Status</th>
            <th className=" p-2 text-left text-black text-sm border-b font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1,2,3,4,5].map((sn, idx) => (
            <tr key={sn} className="">
              <td className=" mr-8 pr-8 text-gray-700 text-[14px] font-medium border-none ">{`0${sn}`}</td>
              <td className="py-3 ml-0 pl-0 border-b px-4">
                <Image
                  src={images.Profile}
                  alt="Owner"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className=" text-[14px] border-b text-gray-700">Ibrahim Sani Tambaya</td>
              <td className="p-2 border-b">
                <div className=" text-[14px]  text-gray-700">+2348062910352</div>
                <div className="text-[14px]  text-green-700">ibtambaya@gmail.com</div>
              </td>
              <td className=" text-[14px] border-b text-gray-700">Nigeria</td>
              <td className=" p-2 text-[14px] border-b text-gray-700">Kano</td>
              <td className=" p-2 text-[14px] border-b text-gray-700">Kano</td>
              <td className=" text-[14px] border-b text-gray-700">5</td>
              <td className=" p-2 text-[14px] border-b text-gray-700">2023-10-01</td>
              
              <td className=" p-2 text-[14px] border-b text-gray-700">{idx % 2 === 0 ?  
                      <span className="text-red-600 ">pending</span>:
                       <span className="text-green-600">Completed</span>}
                    </td>
            
              <td className="border-b">
                <div className="flex p-2 gap-2">
                  <button className=" bg-gray-200 px-3 py-1 rounded text-gray-700 text-[14px]">Edit</button>
                  <button className=" bg-gray-200 px-3 py-1 rounded text-gray-700 text-[14px]">View</button>
                  <button className=" bg-gray-200 px-3 py-1 rounded text-gray-700 text-[14px]">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div></div>
  )
}

export default Clients