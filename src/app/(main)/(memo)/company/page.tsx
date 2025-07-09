"use client"
import React, { useRef, useState } from 'react';
import Header3 from '@/Components/Header3'
import Image from 'next/image'
import images from '../../../../../constants/images'
import { Search } from 'lucide-react';
import {  useParams } from 'next/navigation';

const tabList = [
  { label: "overview", key: "overview" },
  { label: "Owners", key: "owners" },
  { label: "Tenants", key: "tenants" },
  { label: "Agents", key: "agents" },
];

const projectEntries = [
  { image: images.karmo, name: "Karmo distrct market", type: "Commercial", id: "1" },
  { image: images.fountain, name: "Fountain Veiw Estate", type: "Residential", id: "2" },
  { image: images.jabi, name: "Jabi Mixed Used Market", type: "Office | Mall | Residence", id: "3" },
];

const Project = () => {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectEntries.find(p => p.id === projectId);

  const [activeTab, setActiveTab] = useState("overview");
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSavedDialog, setShowSavedDialog] = useState(false);
  const [teams, setTeams] = useState([
    { no: 2, profession: "Architecture" },
    { no: 2, profession: "Procurement" },
    { no: 30, profession: "Building" },
    { no: 3, profession: "Management" },
  ]);
  const [showTeamDialog, setShowTeamDialog] = useState(false);
  const [newNo, setNewNo] = useState('');
  const [newProfession, setNewProfession] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
 
  
  
  

  // Handle image selection
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      const readers = files.map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve(ev.target?.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(imgs => {
        setSelectedImages(prev => [...prev, ...imgs]);
        setCurrentImageIndex(prev => prev === 0 ? 0 : prev); // keep current index or reset if first upload
      });
    }
  };

  // Handle save and dialog
  const handleSave = () => {
    // Here you would save the image to your backend if needed
    setShowSavedDialog(true);
    setTimeout(() => {
      setShowSavedDialog(false);
      setShowEditButtons(false);
    }, 2000);
  };

  // File dialog handler
  

  return (
    <div className='max-h-screen overflow-auto bg-gray-100 scrollbar-none'>
        <Header3 name='Settings > Company Profile'/>
    <div className="flex  flex-col  md:flex-row gap-6 p-6 bg-gray-100  mb-8 "> {/*ax-h-[calc(100vh-50px)]*/}
      {/* Form Section */}
      <div className="flex-1 max-h-[calc(100vh-50px)] w-400 pr-10 overflow-auto scrollbar-none md:w-1/3 ">
      <div className="flex-1 border-[2px] border-gray-300 rounded-md p-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Business Registration Number(ID)" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Company Name" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Business Type" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Date Established" />
          
          <textarea
            className="border border-[ #414C52] text-[12px] rounded-md h-[67px] p-2 col-span-2 "
            placeholder="Description"
          ></textarea>
        </form>
      </div>
       {/* Tabs Section */}
    <div className="w-full  mt-8">
      {/* Tab Headers */}
      <div className="flex h-[32px] bg-gray-200 rounded-md mb-4">
        {tabList.map(tab => (
          <button
            key={tab.key}
            className={`flex-1  m-1 h-[24px] juastify-center items-center text-[11.86px] font-[ #414C52];
] text-center rounded-md transition-colors ${
              activeTab === tab.key
                ? "bg-white shadow "
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-100 rounded-md w-212 p-4 border-gray-300 border">
        {activeTab === "overview" && (
          <div className=''>
             <div className="flex items-center mb-4">
              <span className="mr-10">Overview</span>
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
            <div className="grid grid-cols-3 gap-4 gap-x-4">
              {teams.map((team, idx) => (
                <div key={idx} className="bg-gray-200 w-[226px] rounded-lg p-4 pb-4">
                  <div className="font-bold">{team.no}</div>
                  <div>{team.profession}</div>
                </div>
              ))}
              <div
                className="bg-gray-200 w-[226px] rounded-lg p-4 pb-4 flex items-center justify-center text-2xl text-green-900 cursor-pointer"
                onClick={() => setShowTeamDialog(true)}
              >
                +
              </div>
            </div>

            {/* Team Add Dialog */}
            {showTeamDialog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px]">
                  <div className="text-lg font-semibold mb-2">Add Team</div>
                  <input
                    type="number"
                    className="border rounded-md p-2"
                    placeholder="Number"
                    value={newNo}
                    onChange={e => setNewNo(e.target.value)}
                  />
                  <input
                    type="text"
                    className="border rounded-md p-2"
                    placeholder="Profession"
                    value={newProfession}
                    onChange={e => setNewProfession(e.target.value)}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
                      onClick={() => {
                        if (newNo && newProfession) {
                          setTeams([...teams, { no: Number(newNo), profession: newProfession }]);
                          setNewNo('');
                          setNewProfession('');
                          setShowTeamDialog(false);
                        }
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setShowTeamDialog(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "owners" && (
  <div className='w-205'>
     <div className="flex w-212 items-center mb-4">
              <span className="mr-10">Owners overView</span>
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
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">Property owned</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Type</th>
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
              <td className=" text-[11px] border-b text-gray-700">5</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">{idx % 2 === 0 ? "Individual" : "Company"}</td>
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
)}

        {activeTab === "tenants" && (
         <div className='w-205'>
     <div className="flex w-212 items-center mb-4">
              <span className="mr-10">Tenants Overview</span>
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
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">Property unit</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Type</th>
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
              <td className=" text-[11px] border-b text-gray-700">5</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">{idx % 2 === 0 ? "Individual" : "Company"}</td>
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
        )}

        {activeTab === "agents" && (
          <div className='w-205'>
     <div className="flex w-212 items-center mb-4">
              <span className="mr-10">Agents overview</span>
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
            <th className=" text-left text-gray-600 text-[11px] border-b font-medium">Property unit</th>
            <th className=" p-2 text-left text-gray-600 text-[11px] border-b font-medium">Type</th>
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
              <td className=" text-[11px] border-b text-gray-700">5</td>
              <td className=" p-2 text-[11px] border-b text-gray-700">{idx % 2 === 0 ? "Individual" : "Company"}</td>
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
        )}
      </div>
    </div>
      </div>

      {/* Image and Edit Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-60 h-60 rounded-2xl overflow-hidden shadow-md bg-white">
          {project && (
            <Image
              src={selectedImages.length > 0 ? selectedImages[currentImageIndex] : project.image}
              alt="Project"
              className="w-full h-full object-cover"
              fill
            />
          )}
          {/* Close Icon */}
          <button className="absolute top-2 right-2 text-black text-xl font-bold">×</button>
          {/* Image Dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {(selectedImages.length > 0 ? selectedImages : [images.karmo]).map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full border border-gray-400 cursor-pointer ${currentImageIndex === idx ? 'bg-black' : 'bg-white'}`}
                onClick={() => setCurrentImageIndex(idx)}
              ></div>
            ))}
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
          multiple
        />

        {!showEditButtons ? (
          <button
            className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800"
            onClick={() => setShowEditButtons(true)}
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <button
              className="bg-green-900 text-white px-8 py-3 rounded-md hover:bg-green-800 w-[220px]"
              onClick={handleUploadClick}
            >
              Upload Images
            </button>
            <button
              className="bg-green-900 text-white px-8 py-3 rounded-md hover:bg-green-800 w-[140px]"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}

        {/* Saved Dialog */}
        {showSavedDialog && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black/80 bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="50" stroke="#13322B" strokeWidth="6"/>
                <path d="M40 65L55 80L80 50" stroke="#13322B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-2xl font-bold text-[#13322B] mt-4">Saved!!</div>
            </div>
          </div>
        )}
      </div>
    </div>

   
    </div>
  )
}

export default Project