"use client"
import React, { useRef, useState } from 'react';
import Header3 from '@/Components/Header3'
import Image from 'next/image'
import images from '../../../../../../constants/images'
import { Search } from 'lucide-react';
import {  useParams } from 'next/navigation';

const tabList = [
  { label: "Teams/Members", key: "teams" },
  { label: "Files", key: "files" },
  { label: "Progress", key: "progress" },
  { label: "Notes/Reports", key: "notes" },
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

  const [activeTab, setActiveTab] = useState("teams");
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
  const [files, setFiles] = useState([
    { name: "File Name", icon: "/ppt-icon.png" },
    { name: "File Name", icon: "/ppt-icon.png" },
    { name: "File Name", icon: "/ppt-icon.png" },
  ]);
  const [showFileDialog, setShowFileDialog] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileIcon, setNewFileIcon] = useState('/ppt-icon.png');
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [notes, setNotes] = useState([
    { title: "Tasks", desc: "All Team members are expected to finish their given tasks before the end date" },
    { title: "Tasks Assignment", desc: "All tasks are bien Assign Ever mondays" },
    { title: "Tasks Assignment", desc: "All tasks are bien Assign Ever mondays" },
    { title: "Labor", desc: "More Laborers are needed To meet the Target" },
    { title: "Unit Completion", desc: "Standard shop, Unit 5 has been completed" },
    { title: "Tasks Assignment", desc: "All tasks are bien Assign Ever mondays" },
  ]);
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteDesc, setNewNoteDesc] = useState('');
  
  

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
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNewFileIcon(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='max-h-screen overflow-auto bg-gray-100 scrollbar-none'>
        <Header3 name='Project'/>
        <div className="flex  flex-col md:flex-row gap-6 p-6 bg-gray-100  mb-8 "> {/*ax-h-[calc(100vh-50px)]*/}
      {/* Form Section */}
      <div className="flex-1 max-h-[calc(100vh-50px)] w-[826px] pr-10 overflow-auto scrollbar-none md:w-1/3 ">
      <div className="flex-1 border-[2px] border-gray-300 rounded-md p-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Registration Number(ID)" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Project Name" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Type" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Location" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Status" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Budget" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="Start Date" />
          <input className="border border-[ #414C52] rounded-md placeholder-[#414C52] text-[12px] h-[40px] p-2" placeholder="End Date" />
          <textarea
            className="border border-[ #414C52] text-[12px] rounded-md h-[67px] p-2 col-span-2 "
            placeholder="Description"
          ></textarea>
        </form>
      </div>
       {/* Tabs Section */}
    <div className="w-full mt-8">
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
      <div className="bg-gray-100 rounded-md p-4 border-gray-300 border">
        {activeTab === "teams" && (
          <div className=''>
             <div className="flex items-center mb-4">
              <span className="mr-10">Teams Overview</span>
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

        {activeTab === "files" && (
          <div>
            <div className="flex items-center mb-4">
              <span className="mr-10">Files Overview</span>
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
            <div className="flex gap-4">
              {files.map((file, idx) => (
                <div key={idx} className="bg-gray-200 rounded-lg p-4 flex flex-col items-center w-40">
                  <img src={file.icon} alt="File" className="w-16 h-16 mb-2" />
                  <div className="text-sm mb-2">{file.name}</div>
                  <div className="flex gap-2">
                    <button title="Download">⬇️</button>
                    <button title="Share">🔗</button>
                    <button title="Delete">🗑️</button>
                  </div>
                </div>
              ))}
              <div
                className="bg-gray-200 rounded-lg p-4 flex items-center justify-center w-40 text-2xl text-green-900 cursor-pointer"
                onClick={() => setShowFileDialog(true)}
              >
                +
              </div>
            </div>

            {/* File Add Dialog */}
            {showFileDialog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px]">
                  <div className="text-lg font-semibold mb-2">Add File</div>
                  <input
                    type="text"
                    className="border rounded-md p-2"
                    placeholder="File Name"
                    value={newFileName}
                    onChange={e => setNewFileName(e.target.value)}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileUploadRef}
                    className="border rounded-md p-2"
                    onChange={handleFileUpload}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
                      onClick={() => {
                        if (newFileName) {
                          setFiles([...files, { name: newFileName, icon: newFileIcon }]);
                          setNewFileName('');
                          setNewFileIcon('/ppt-icon.png');
                          setShowFileDialog(false);
                        }
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setShowFileDialog(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "progress" && (
          <div>
            <div className="font-semibold mb-2">Progress</div>
            <div className="flex gap-4">
              <div className="bg-gray-200 rounded-lg p-4 flex-1 min-w-[220px]">
                <div className="font-bold">Construction Progress</div>
                <div className="flex items-center my-2">
                  <div className="flex-1 h-2 bg-gray-400 rounded">
                    <div className="h-2 bg-green-900 rounded" style={{ width: "65%" }}></div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full ml-2"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>65% Complete</span>
                  <span>Phase 3 of 6</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex-1 min-w-[220px]">
                <div className="font-bold">Budget Utilization</div>
                <div className="flex items-center my-2">
                  <div className="flex-1 h-2 bg-gray-400 rounded">
                    <div className="h-2 bg-green-900 rounded" style={{ width: "58%" }}></div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full ml-2"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>N2.9m / 5m</span>
                  <span>12% Under</span>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 flex-1 min-w-[220px]">
                <div className="font-bold">Unit Pre-sale</div>
                <div className="flex items-center my-2">
                  <div className="flex-1 h-2 bg-gray-400 rounded">
                    <div className="h-2 bg-green-900 rounded" style={{ width: "30%" }}></div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full ml-2"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>24Units / 80Units</span>
                  <span>8Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notes" && (
          <div>
            
             <div className="flex items-center mb-4">
              <span className="mr-10">Notes/Reports</span>
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
            <div className="grid grid-cols-3 gap-4">
              {notes.map((note, idx) => (
                <div key={idx} className="bg-gray-200 rounded-lg p-4">
                  <div className="font-bold">{note.title}</div>
                  <div className="text-xs">{note.desc}</div>
                </div>
              ))}
              <div
                className="bg-gray-200 justify-center items-center text-center rounded-lg p-4 cursor-pointer"
                onClick={() => setShowNoteDialog(true)}
              >
                +
              </div>
            </div>

            {/* Note Add Dialog */}
            {showNoteDialog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px]">
                  <div className="text-lg font-semibold mb-2">Add Note/Report</div>
                  <input
                    type="text"
                    className="border rounded-md p-2"
                    placeholder="Title"
                    value={newNoteTitle}
                    onChange={e => setNewNoteTitle(e.target.value)}
                  />
                  <textarea
                    className="border rounded-md p-2"
                    placeholder="Description"
                    value={newNoteDesc}
                    onChange={e => setNewNoteDesc(e.target.value)}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
                      onClick={() => {
                        if (newNoteTitle && newNoteDesc) {
                          setNotes([...notes, { title: newNoteTitle, desc: newNoteDesc }]);
                          setNewNoteTitle('');
                          setNewNoteDesc('');
                          setShowNoteDialog(false);
                        }
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setShowNoteDialog(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
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