import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectImageList } from "@/constant/constant";

const Project = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Latest Projects
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-1">
              Driving Innovation and Excellence in Software Development
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#_"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto">
              All Projects
            </a>
          </div>
        </div>
        {/* project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {
            // mapping images
            ProjectImageList.map((item) => (
              <div key={item.id}>
                <ProjectCard image={item.image} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Project;
