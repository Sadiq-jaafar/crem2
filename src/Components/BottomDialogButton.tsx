"use client";
import React from "react";
import SuccessDialog from "./SuccessDialog";
import { useRouter } from 'next/navigation';
import { primary } from '../../constants/colors';
import Image from "next/image";
import icons from "../../constants/icons";

const BottomDialogButton: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [showStationDialog, setShowStationDialog] = React.useState(false);
  const [showAllocationDialog, setShowAllocationDialog] = React.useState(false);
  const [showClientDialog, setShowClientDialog] = React.useState(false);
  const [showClientSmallDialog, setShowClientSmallDialog] = React.useState(false);
  const [showTenantsDialog, setShowTenantsDialog] = React.useState(false);
  const [showTenantsSmallDialog, setShowTenantsSmallDialog] = React.useState(false);
  const [showUserDialog, setShowUserDialog] = React.useState(false);
  const [showUserSmallDialog, setShowUserSmallDialog] = React.useState(false);
  const [showDepartmentDialog, setShowDepartmentDialog] = React.useState(false);
  const [showDepartmentSuccess, setShowDepartmentSuccess] = React.useState(false);
  const [showEventDialog, setShowEventDialog] = React.useState(false);
  const [showEventPreview, setShowEventPreview] = React.useState(false);
  const [showEventSuccess, setShowEventSuccess] = React.useState(false);
  const [showMemoDialog, setShowMemoDialog] = React.useState(false);
  const [showAgentDialog, setShowAgentDialog] = React.useState(false);
  const [showAgentSmallDialog, setShowAgentSmallDialog] = React.useState(false);
  const [showReportDialog, setShowReportDialog] = React.useState(false);
  const [showReportSuccess, setShowReportSuccess] = React.useState(false);
  const [showProjectDialog, setShowProjectDialog] = React.useState(false);
  const [projectStatus, setProjectStatus] = React.useState(true);
  const [departmentStatus, setDepartmentStatus] = React.useState(true);
  const [showProjectSuccess, setShowProjectSuccess] = React.useState(false);
  const [showPropertyDialog, setShowPropertyDialog] = React.useState(false);
  const [propertyStatus, setPropertyStatus] = React.useState(true);
  const [showPropertySuccess, setShowPropertySuccess] = React.useState(false);

  return (
    <>
      <div className="fixed left-1/2 flex-row transform -translate-x-1/2 bottom-0 mb-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-white px-6 py-3 rounded-l-full shadow-lg hover:bg-gray-400 transition"
          style={{ color: primary }}
        >
          <div className="flex items-center gap-2">
            <Image src={icons.add} alt="add" className="w-4 h-4" />
            <span className="text-[16px]">New</span>
          </div>
          
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-white px-6 py-3 rounded-r-full shadow-lg hover:bg-gray-400 transition"
          style={{ color: primary }}
        >
          <div className="flex items-center gap-2">
            <Image src={icons.search} alt="search" className="w-4 h-4" />
            <span className="text-[16px]">Search</span>
          </div>
        </button>
      </div>
      {open && !showStationDialog && !showAllocationDialog && !showClientDialog && !showTenantsDialog && !showUserDialog && !showDepartmentDialog && !showEventDialog && !showMemoDialog && !showAgentDialog && !showReportDialog && !showProjectDialog && !showPropertyDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[800px]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-2">Create New</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-3 gap-x-8 gap-y-2">
              <div className="flex flex-col gap-2">
                <button className="text-black px-6 py-2 rounded-lg shadow-sm font-medium text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowAllocationDialog(true)} style={showAllocationDialog ? { background: '#09342D', color: 'white' } : {}}>Allocation</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowClientDialog(true)} style={showClientDialog ? { background: '#09342D', color: 'white' } : {}}>Client</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowTenantsDialog(true)} style={showTenantsDialog ? { background: '#09342D', color: 'white' } : {}}>Tenant</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowUserDialog(true)} style={showUserDialog ? { background: '#09342D', color: 'white' } : {}}>User</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowDepartmentDialog(true)} style={showDepartmentDialog ? { background: '#09342D', color: 'white' } : {}}>Department/Team</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowEventDialog(true)} style={showEventDialog ? { background: '#09342D', color: 'white' } : {}}>Event</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowMemoDialog(true)} style={showMemoDialog ? { background: '#09342D', color: 'white' } : {}}>Memo</button>
 
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowReportDialog(true)} style={showReportDialog ? { background: '#09342D', color: 'white' } : {}}>Report</button>


              </div>
              <div className="flex flex-col gap-2">
              <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowAgentDialog(true)} style={showAgentDialog ? { background: '#09342D', color: 'white' } : {}}>Agent</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white">Report</button>
                <button className="text-gray-300 px-6 py-2 rounded-lg text-left cursor-not-allowed">Template</button>
                <hr className="my-2" />
                <div className="flex-row gap-2">

                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowProjectDialog(true)} style={showProjectDialog ? { background: '#09342D', color: 'white' } : {}}>Project</button>
                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowPropertyDialog(true)} style={showPropertyDialog ? { background: '#09342D', color: 'white' } : {}}>Property</button>
                </div>

                <button className="text-black px-6 py-2 rounded-lg text-left cursor-pointer hover:bg-[#09342D] hover:text-white" onClick={() => setShowStationDialog(true)} style={showStationDialog ? { background: '#09342D', color: 'white' } : {}}>Station/Branch</button>
              </div>
              <div className="flex flex-col gap-2">
                <button className="text-gray-300 px-6 py-2 rounded-lg text-left cursor-not-allowed">Marketing</button>
                <button className="text-gray-300 px-6 py-2 rounded-lg text-left cursor-not-allowed">Announcement</button>
                <button className="text-gray-300 px-6 py-2 rounded-lg text-left cursor-not-allowed">Message</button>
                <button className="text-gray-300 px-6 py-2 rounded-lg text-left cursor-not-allowed">Feed</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {open && showAllocationDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowAllocationDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[800px]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowAllocationDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Create New Allocation</h2>
            </div>
            <form className="space-y-4">
              {/* Station */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏢</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Station?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Property */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏠</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Property?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Type */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏠</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Type?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Block */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏠</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Block?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Unit */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏠</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Unit?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Owner */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👤</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Owner?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Payment Status */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">💲</span>
                <input className="flex-1 bg-transparent outline-none text-gray-400" placeholder="Payment Status?" disabled />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-green-900 text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showStationDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowStationDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[800px]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowStationDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Create New Station/Branch</h2>
            </div>
            <form className="space-y-4">
              <input className="w-full border rounded px-3 py-2" placeholder="Branch Name?" />
              <input className="w-full border rounded px-3 py-2" placeholder="Email?" />
              <input className="w-full border rounded px-3 py-2" placeholder="Location?" />
              <input className="w-full border rounded px-3 py-2" placeholder="Phone Number?" />
              <input className="w-full border rounded px-3 py-2" placeholder="Branch Manager?" />
              <div className="relative">
                <input
                  className="w-full border rounded px-3 py-2"
                  placeholder="Members"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">👥</span>
              </div>
              {/* Members tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Member1", "Member2", "Member4", "Member5", "Member6", "Member7", "Member8", "Member9", "Member10", "Member11", "Member12"].map((m) => (
                  <span
                    key={m}
                    className="bg-gray-100 border rounded px-2 py-1 text-sm flex items-center"
                  >
                    {m} <span className="ml-1 cursor-pointer">—</span>
                  </span>
                ))}
              </div>
              {/* Logo upload section */}
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Station/Branch Logo?"
                />
                <button
                  type="button"
                  className="bg-green-900 text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                >
                  Upload
                </button>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-green-900 text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showClientDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowClientDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowClientDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Add New Client</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Client */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Client?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Client Name */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Client Name?" />
              </div>
              {/* Email */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Email?" />
              </div>
              {/* Property */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Property?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Type */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Type?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Unit */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Unit?" />
              </div>
              <div className="flex justify-end mt-6 relative">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowClientSmallDialog(true)}
                >
                  Add
                </button>
                {showClientSmallDialog && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow-lg border z-50 flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowClientSmallDialog(false); /* handle manual create here */ }}
                    >
                      Create Client Manually
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowClientSmallDialog(false); /* handle send mail here */ }}
                    >
                      Send Client a Mail
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showTenantsDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowTenantsDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowTenantsDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Add New Tenant</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Tenant */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Tenant?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Tenant Name */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Tenant Name?" />
              </div>
              {/* Email */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Email?" />
              </div>
              {/* Property */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Property?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Type */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Type?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Unit */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Unit?" />
              </div>
              <div className="flex justify-end mt-6 relative">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowTenantsSmallDialog(true)}
                >
                  Add
                </button>
                {showTenantsSmallDialog && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow-lg border z-50 flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowTenantsSmallDialog(false); /* handle manual create here */ }}
                    >
                      Create Tenant Manually
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowTenantsSmallDialog(false); /* handle send mail here */ }}
                    >
                      Send Tenant a Mail
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showUserDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowUserDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowUserDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Add New User</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Station */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🗂️</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Station?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Department/Team */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🗂️</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Department/Team?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Roll */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🏷️</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Roll" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Email */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">✉️</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Email" />
              </div>
              <div className="flex justify-end mt-6 relative">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowUserSmallDialog(true)}
                >
                  Add
                </button>
                {showUserSmallDialog && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow-lg border z-50 flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowUserSmallDialog(false); /* handle manual create here */ }}
                    >
                      Create User Manually
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowUserSmallDialog(false); /* handle send mail here */ }}
                    >
                      Send User a Mail
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showDepartmentDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowDepartmentDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowDepartmentDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Create New Department/Team</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Members */}
              <div className="space-y-2">
                <div className="flex items-center border rounded px-3 py-2">
                  <span className="mr-2 text-gray-400">👥</span>
                  <input className="flex-1 bg-transparent outline-none" placeholder="Members" />
                  <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
                </div>
                {/* Member Chips */}
                <div className="flex flex-wrap gap-2">
                  {['Member1', 'Member2', 'Member4', 'Member5', 'Member6', 'Member7', 'Member8', 'Member9', 'Member10', 'Member11', 'Member12'].map((member, index) => (
                    <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                      <span>{member}</span>
                      <button className="ml-2 text-gray-500 hover:text-red-500">—</button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Team Lead */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👥</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Team Lead?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Assistant Team Lead */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👥</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Assistant Team Lead?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Status */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👥</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Status" />
                <div 
                  className={`ml-2 w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ${
                    departmentStatus ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setDepartmentStatus(!departmentStatus)}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                    departmentStatus ? 'right-1' : 'left-1'
                  }`}></div>
                </div>
              </div>
              <div className="flex justify-end mt-6 relative">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowDepartmentSuccess(true)}
                >
                  Add
                </button>
                {showDepartmentSuccess && (
                  <SuccessDialog
                    open={showDepartmentSuccess}
                    onClose={() => setShowDepartmentSuccess(false)}
                    title="Success !!"
                    message={
                      `Your Subscription Has Been\nSuccessfully Upgraded To The\nEnterprise Plan. Your Next Renewal\nDate Is DD/MM/YYYY.\nThank You For Choosing Us — We’re\nCommitted To Delivering The Highest\nLevel Of Service And Value.`
                    }
                    buttonText="Ok"
                    onNavigate={() => {
                      setOpen(false);
                      setShowDepartmentDialog(false);
                      setShowDepartmentSuccess(false);
                      router.push('/tabs/Departments');
                    }}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showEventDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowEventDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowEventDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Create New Event</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Event Title */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">📅✓</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="What's the Events Title?" />
              </div>
              {/* Category */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">⊞</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Category?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Members */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👥</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Members" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Date */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">📅19</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Date?" />
              </div>
              {/* Time */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">🕐</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Time?" />
              </div>
              {/* Format */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">📍</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Format?" />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowEventPreview(true)}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showEventDialog && showEventPreview && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowEventPreview(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowEventPreview(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Preview New Event</h2>
            </div>
            <hr className="mb-6" />
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Title:</span>
                  <span className="text-gray-900">Quarterly Team Workshop</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Members:</span>
                  <span className="text-gray-900">Procurement Department & Administrative Department</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Category:</span>
                  <span className="text-gray-900">Business Meeting</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Date:</span>
                  <span className="text-gray-900">May 25, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Time:</span>
                  <span className="text-gray-900">2:00 PM - 4:00 PM (GMT+1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Format:</span>
                  <span className="text-gray-900">Virtual</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Join Link:</span>
                  <span className="text-blue-600 underline cursor-pointer">meet.google.com/xyz-abc-123</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Meeting ID:</span>
                  <span className="text-gray-900">xyz-abc-123</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Passcode:</span>
                  <span className="text-gray-900">2025</span>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowEventSuccess(true)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <SuccessDialog
        open={showEventSuccess}
        onClose={() => setShowEventSuccess(false)}
        title="Success !!"
        message="Meeting Successfully Scheduled!\nYour Virtual Meeting Is Ready And\nInvitations Have Been Sent!\nTo All Members."
        buttonText="Ok"
        onNavigate={() => {
          setOpen(false);
          setShowEventDialog(false);
          setShowEventPreview(false);
          setShowEventSuccess(false);
          router.push('/tabs/Events');
        }}
      />
      {open && showMemoDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowMemoDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowMemoDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Create New Memo</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Memo head */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Memo head?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* REF. no */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="REF. no?" />
              </div>
              {/* Sending to */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Sending to?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Through */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Through?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Subject */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Subject?" />
              </div>
              {/* Purpose */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Purpose?" />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => {
                    setOpen(false);
                    setShowMemoDialog(false);
                    router.push('/memo2');
                  }}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showAgentDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowAgentDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowAgentDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">Add New Agent</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Agent */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Agent?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Agent Name */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Agent Name?" />
              </div>
              {/* Email */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Email?" />
              </div>
              {/* Property */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Property?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              <div className="flex justify-end mt-6 relative">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowAgentSmallDialog(true)}
                >
                  Add
                </button>
                {showAgentSmallDialog && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded shadow-lg border z-50 flex flex-col">
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowAgentSmallDialog(false); /* handle manual create here */ }}
                    >
                      Create Agent Manually
                    </button>
                    <button
                      className="px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => { setShowAgentSmallDialog(false); /* handle send mail here */ }}
                    >
                      Send Agent a Mail
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {open && showReportDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center" onClick={() => setShowReportDialog(false)}>
          <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowReportDialog(false)}
                className="mr-2 text-2xl cursor-pointer"
                aria-label="Back"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">New Report</h2>
            </div>
            <hr className="mb-6" />
            <form className="space-y-4">
              {/* Report type */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Report type?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Title */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Title?" />
              </div>
              {/* Content */}
              <div className="border rounded px-3 py-2">
                <textarea 
                  className="w-full bg-transparent outline-none resize-none" 
                  placeholder="Content?" 
                  rows={8}
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowReportSuccess(true)}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <SuccessDialog
        open={showReportSuccess}
        onClose={() => setShowReportSuccess(false)}
        title="Success !!"
        message="You Have Successfully Created A New Report\nOn Karmo District Market. Head Over To\nThe Report For Attachment."
        buttonText="Ok"
        onNavigate={() => {
          setOpen(false);
          setShowReportDialog(false);
          setShowReportSuccess(false);
        }}
      />
      {open && showProjectDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowProjectDialog(false)}>
          <div className="bg-white rounded-lg shadow-xl w-[500px] max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 pb-4">
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setShowProjectDialog(false)}
                  className="mr-2 text-2xl cursor-pointer"
                  aria-label="Back"
                >
                  ←
                </button>
                <h2 className="text-2xl font-semibold">New Project</h2>
              </div>
              <hr className="mb-6" />
            </div>
            <div className="flex-1 overflow-y-auto px-6">
              <form className="space-y-4">
              {/* Registration Number(ID) */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Registration Number(ID)?" />
              </div>
              {/* Project Name */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Project Name?" />
              </div>
              {/* Project Type */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Project Type" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Location */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Location?" />
              </div>
              {/* Budget */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Budget?" />
              </div>
              {/* Start Date */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Start Date?" />
              </div>
              {/* End Date */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="End Date?" />
              </div>
              {/* Description */}
              <div className="border rounded px-3 py-2">
                <textarea 
                  className="w-full bg-transparent outline-none resize-none" 
                  placeholder="Description?" 
                  rows={4}
                />
              </div>
              {/* Project Manager */}
              <div className="flex items-center border rounded px-3 py-2">
                <input className="flex-1 bg-transparent outline-none" placeholder="Project Manager?" />
                <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
              </div>
              {/* Status */}
              <div className="flex items-center border rounded px-3 py-2">
                <span className="mr-2 text-gray-400">👥</span>
                <input className="flex-1 bg-transparent outline-none" placeholder="Status?" />
                <div 
                  className={`ml-2 w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ${
                    projectStatus ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setProjectStatus(!projectStatus)}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                    projectStatus ? 'right-1' : 'left-1'
                  }`}></div>
                </div>
              </div>
            </form>
            </div>
            <div className="p-6 pt-4 border-t">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowProjectSuccess(true)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <SuccessDialog
        open={showProjectSuccess}
        onClose={() => setShowProjectSuccess(false)}
        title="Success !!"
        message="You Have Successfully Created A New Project\n(Fountain View Estate) With 7 Members,\nAn Onboarding Email Has Been Sent To All Member."
        buttonText="Ok"
        onNavigate={() => {
          setOpen(false);
          setShowProjectDialog(false);
          setShowProjectSuccess(false);
          router.push('/tabs/Projects');
        }}
      />
      {open && showPropertyDialog && (
        <div className="fixed bg-opacity-10 inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowPropertyDialog(false)}>
          <div className="bg-white rounded-lg shadow-xl w-[500px] max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 pb-4">
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setShowPropertyDialog(false)}
                  className="mr-2 text-2xl cursor-pointer"
                  aria-label="Back"
                >
                  ←
                </button>
                <h2 className="text-2xl font-semibold">New Property</h2>
              </div>
              <hr className="mb-6" />
            </div>
            <div className="flex-1 overflow-y-auto px-6">
              <form className="space-y-4">
                {/* Property reg */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Registration Number(ID)?" />
                </div>
                {/* Property Name */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Property Name:" />
                </div>
                {/* Property Type */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Property Type" />
                  <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
                </div>
                {/* Location */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Location?" />
                </div>
                {/* Property Size */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Property Size?" />
                </div>
                {/* Property Manager */}
                <div className="flex items-center border rounded px-3 py-2">
                  <input className="flex-1 bg-transparent outline-none" placeholder="Property Manager?" />
                  <span className="ml-2 text-gray-400 cursor-pointer">▼</span>
                </div>
                {/* Status */}
                <div className="flex items-center border rounded px-3 py-2">
                  <span className="mr-2 text-gray-400">👥</span>
                  <input className="flex-1 bg-transparent outline-none" placeholder="Status?" />
                  <div 
                    className={`ml-2 w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ${
                      propertyStatus ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setPropertyStatus(!propertyStatus)}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                      propertyStatus ? 'right-1' : 'left-1'
                    }`}></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-6 pt-4 border-t">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#09342D] text-white px-8 py-2 rounded cursor-pointer hover:bg-[#09342D] hover:text-white"
                  onClick={() => setShowPropertySuccess(true)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <SuccessDialog
        open={showPropertySuccess}
        onClose={() => setShowPropertySuccess(false)}
        title="Success !!"
        message="You Have Successfully Created A New\nProperty (**Karmo District Market**) With 7\nMembers, An Onboarding Email Has Been\nSent To All Member."
        buttonText="Ok"
        onNavigate={() => {
          setOpen(false);
          setShowPropertyDialog(false);
          setShowPropertySuccess(false);
          router.push('/tabs/Property');
        }}
      />
    </>
  );
};

export default BottomDialogButton; 