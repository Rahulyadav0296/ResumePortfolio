import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

function Skills() {
  const skills = [
    { name: "ReactJs", value: 80, color: "#ef4444" }, // red-500
    { name: "HTML/CSS", value: 80, color: "#3b82f6" }, // blue-500
    { name: "NextJs", value: 75, color: "#8b5cf6" }, // purple-500
    { name: "JavaScript", value: 80, color: "#10b981" }, // green-500
    { name: "MongoDB", value: 60, color: "#14b8a6" }, // teal-500
    { name: "TypeScript", value: 80, color: "#facc15" }, // yellow-500
    { name: "NodeJs", value: 50, color: "#f97316" }, // orange-500
    { name: "Bootstrap", value: 80, color: "#6b7280" }, // gray-500
    { name: "ExpressJs", value: 50, color: "#1d4ed8" }, // blue-700
    { name: "Tailwind CSS", value: 75, color: "#6366f1" }, // indigo-500
    { name: "Python", value: 70, color: "#047857" }, // green-700
    { name: "Media Query", value: 80, color: "#000000" }, // pink-500
  ];

  const ProgressBar = ({ value, color }) => (
    <div className="relative w-full">
      <Box
        sx={{
          width: "100%",
          "& .MuiLinearProgress-bar": { backgroundColor: color },
        }}
      >
        <LinearProgress
          variant="determinate"
          value={value}
          className="w-full h-6"
        />
      </Box>
      <span className="absolute mt-3 right-0 top-0 text-white text-sm font-bold">
        {value}%
      </span>
    </div>
  );

  return (
    <div className="md:p-8 md:mx-8bg-gradient-to-r from-cyan-500 to-blue-500  shadow-2xl rounded-lg w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-12 text-white">
        My Skills
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {skills.map((skill) => (
          <div className="flex items-center space-x-4" key={skill.name}>
            <strong className="w-1/3 md:w-1/4 text-lg text-white">
              {skill.name}:
            </strong>
            <ProgressBar value={skill.value} color={skill.color} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
