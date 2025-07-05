import ProjectCard from '@/Components/ProjectCard'
import React from 'react'
import images from '../../../../../constants/images'

const projectEntries = [
  { image: images.karmo, name: "Karmo distrct market", type: "Commercial" ,id: "1" },
  { image: images.fountain, name: "Fountain Veiw Estate", type: "Residential", id: "2" },
  { image: images.jabi, name: "Jabi Mixed Used Market", type: "Office | Mall | Residence", id: "3" },
];

const Projects = () => {
  return (
    <div className="max-h-[calc(100vh-50px)] overflow-auto scrollbar-none">
      <ProjectCard projects={projectEntries} />
    </div>
  )
}

export default Projects