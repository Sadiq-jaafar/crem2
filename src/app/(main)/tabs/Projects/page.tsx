"use client"
import ProjectCard from '@/Components/ProjectCard'
import React from 'react'
import images from '../../../../../constants/images'
import { useRouter } from 'next/navigation';
import { StaticImageData } from 'next/image';

type ProjectEntry = {
   image: string | StaticImageData;
  name: string;
  type: string;
  id: string;
};

const projectEntries: ProjectEntry[] = [
  { image: images.karmo, name: "Karmo distrct market", type: "Commercial" ,id: "1" },
  { image: images.fountain, name: "Fountain Veiw Estate", type: "Residential", id: "2" },
  { image: images.jabi, name: "Jabi Mixed Used Market", type: "Office | Mall | Residence", id: "3" },
];

const Projects = () => {
  const navigate = useRouter();

  // Pass the navigation handler to ProjectCard instead
  const handleProjectClick = (project: ProjectEntry) => {
    navigate.push(`/${project.id}/project`);
  };

  return (
    <div className="max-h-[calc(100vh-50px)] overflow-auto scrollbar-none bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ProjectCard projects={projectEntries} onProjectClick={handleProjectClick} />
    </div>
  )
}

export default Projects