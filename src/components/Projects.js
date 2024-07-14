import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

function Projects() {
  return (
    <div className="w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-12 text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-xl font-semibold mb-4 text-gray-800">
                {project.title}
              </p>
              <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                <Link to={project.link} target="_blank">
                  View Source Code
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
