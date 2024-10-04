import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAllRepos = async () => {
      let allRepos = [];
      let page = 1;
      let perPage = 100; // GitHub API allows a maximum of 100 items per page.
      let totalFetched = 0;

      try {
        while (totalFetched < 100) {
          const response = await fetch(
            `https://api.github.com/users/Rahulyadav0296/repos?per_page=${perPage}&page=${page}`
          );
          const data = await response.json();
          console.log(data);
          if (data.length === 0) break; // Stop if no more repos are returned.
          allRepos = [...allRepos, ...data];
          totalFetched += data.length;
          page += 1;
        }
        setProjects(allRepos);
      } catch (err) {
        console.error(err);
        setMessage("Error fetching repositories.");
      }
    };

    fetchAllRepos();
  }, []);

  return (
    <div className="w-full min-h-screen  py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-12 text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <h1 className="text-2xl font-bold text-white p-4">
                {project.name}
              </h1>
              <div className="p-6 bg-white rounded-b-lg">
                <p className="text-lg font-semibold mb-4 text-gray-800">
                  {project.description || "No Description available"}
                </p>
                <p className="mb-2 text-gray-600">
                  Language: {project.language || "Not Specified"}
                </p>
                <p className="mb-2 text-gray-600">
                  Created: {new Date(project.created_at).toDateString()}
                </p>
                <p className="mb-2 text-gray-600">
                  Last Updated: {new Date(project.updated_at).toDateString()}
                </p>
                <p className="mb-4 text-gray-600">
                  ⭐ Stars: {project.stargazers_count} | 🍴 Forks:{" "}
                  {project.forks_count}
                </p>
                <button className="text-white w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <Link to={project.html_url} target="_blank">
                    View Source Code
                  </Link>
                </button>
              </div>
            </div>
          ))}
      </div>
      {message && <p className="text-red-500 text-center mt-4">{message}</p>}
    </div>
  );
}

export default Projects;
