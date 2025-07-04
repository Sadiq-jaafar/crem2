"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProjectEntry {
  image: string | StaticImageData;
  name: string;
  type: string;
  id: string;
}

interface ProjectCardProps {
  projects: ProjectEntry[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  const navigate = useRouter();
  const onClick = (project: ProjectEntry) => {
    navigate.push(`/${project.id}/project`);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      {projects.map((project, idx) => (
        <div
          key={idx}
          onClick={() => onClick(project)}
          className="flex m-4 cursor-pointer bg-gray-600 text-white rounded-xl overflow-hidden shadow-lg w-full max-w-5xl"
        >
          {/* Image Section */}
          <Image
            src={project.image}
            alt={project.name}
            className="object-cover h-full w-full"
            style={{ width: 340, height: 200 }}
          />

          {/* Text Section */}
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-2">{project.name}</h2>
              <p className="text-lg text-gray-300">{project.type}</p>
            </div>

            {/* Rating */}
            <div className="flex justify-end mt-4">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <StarHalf fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
