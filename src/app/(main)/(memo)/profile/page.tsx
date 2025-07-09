"use client";
import React, { useRef, useState } from "react";
import Header3 from "@/Components/Header3";
import Image from "next/image";


const Profile = () => {
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSavedDialog, setShowSavedDialog] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    userId: "",
    userTitle: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone1: "",
    phone2: "",
    degree: "",
    jobTitle: "",
    gradeLevel: "",
    jobStatus: "",
    jobGrade: "",
    jobCluster: "",
    department: "",
    unit: "",
    station: "",
    supervisor: "",
    dateEmployed: "",
    salary: "",
  });

  // Handle image selection
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      const readers = files.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve(ev.target?.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then((imgs) => {
        setSelectedImages((prev) => [...prev, ...imgs]);
        setCurrentImageIndex((prev) => (prev === 0 ? 0 : prev));
      });
    }
  };

  // Save form and image
  const handleSave = () => {
    console.log("Saved form data:", formData);
    console.log("Saved image data:", selectedImages);

    setShowSavedDialog(true);
    setTimeout(() => {
      setShowSavedDialog(false);
      setShowEditButtons(false);
    }, 2000);
  };

  return (
    <div className="max-h-screen overflow-auto bg-gray-100 scrollbar-none">
      <Header3 name="My Profile" />
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 mb-8">
        {/* Form Section */}
        <div className="flex-1 max-h-[calc(100vh-50px)] w-400 pr-10 overflow-auto scrollbar-none md:w-1/3">
          <div className="p-6 bg-gray-100 min-h-screen">
            <form className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="User ID"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.userId}
                  onChange={(e) =>
                    setFormData({ ...formData, userId: e.target.value })
                  }
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="User Title"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.userTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, userTitle: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded p-2 w-full col-span-2"
                  disabled={!showEditButtons}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              {/* Address */}
              <textarea
                placeholder="Address?"
                className="border rounded p-2 w-full"
                rows={2}
                disabled={!showEditButtons}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              ></textarea>

              {/* City/State/Country */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City/Town"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email?"
                className="border rounded p-2 w-full"
                disabled={!showEditButtons}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {/* Phone numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone number(1)"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.phone1}
                  onChange={(e) =>
                    setFormData({ ...formData, phone1: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone number(2)"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.phone2}
                  onChange={(e) =>
                    setFormData({ ...formData, phone2: e.target.value })
                  }
                />
              </div>

              {/* Degree, Job Title, Grade Level */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Bsc. computer Engineering"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Job Title?"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Grade Level"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.gradeLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, gradeLevel: e.target.value })
                  }
                />
              </div>

              {/* Job Status, Grade, Cluster */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Job Status"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.jobStatus}
                  onChange={(e) =>
                    setFormData({ ...formData, jobStatus: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Job Grade"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.jobGrade}
                  onChange={(e) =>
                    setFormData({ ...formData, jobGrade: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Job Cluster"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.jobCluster}
                  onChange={(e) =>
                    setFormData({ ...formData, jobCluster: e.target.value })
                  }
                />
              </div>

              {/* Department, Unit, Station */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Department/Team"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Unit"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.unit}
                  onChange={(e) =>
                    setFormData({ ...formData, unit: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Station"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.station}
                  onChange={(e) =>
                    setFormData({ ...formData, station: e.target.value })
                  }
                />
              </div>

              {/* Supervisor, Date Employed, Salary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Supervisor"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.supervisor}
                  onChange={(e) =>
                    setFormData({ ...formData, supervisor: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Date Employed"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.dateEmployed}
                  onChange={(e) =>
                    setFormData({ ...formData, dateEmployed: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Salary Package"
                  className="border rounded p-2 w-full"
                  disabled={!showEditButtons}
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                />
              </div>
            </form>
          </div>
        </div>

        {/* Image and Button Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-60 h-60 rounded-2xl overflow-hidden shadow-md bg-white">
            {selectedImages.length > 0 ? (
              <Image
                src={selectedImages[currentImageIndex]}
                alt="Profile"
                className="w-full h-full object-cover"
                fill
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image Selected
              </div>
            )}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {(selectedImages.length > 0 ? selectedImages : []).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full border border-gray-400 cursor-pointer ${currentImageIndex === idx ? "bg-black" : "bg-white"}`}
                  onClick={() => setCurrentImageIndex(idx)}
                ></div>
              ))}
            </div>
          </div>

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
                  <circle cx="60" cy="60" r="50" stroke="#13322B" strokeWidth="6" />
                  <path d="M40 65L55 80L80 50" stroke="#13322B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-2xl font-bold text-[#13322B] mt-4">Saved!!</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
