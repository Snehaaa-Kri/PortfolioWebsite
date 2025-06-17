import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png'

const projects = [
  {
    title: "Petify",
    description: "A full-stack pet adoption platform with admin control, payments, and hotel integration.",
    image: "https://tse3.mm.bing.net/th?id=OIP.ruCUOhTBXvtm5rPXHLToIQHaEK&pid=Api&P=0&h=180",
    status: "Completed",
    themeColor: "bg-white"
  },
  {
    title: "Railway Nav",
    description: "SMART India Hackathon project for navigating Indian railway stations using 3D maps and real-time data.",
    image: "https://tse3.mm.bing.net/th?id=OIP.ruCUOhTBXvtm5rPXHLToIQHaEK&pid=Api&P=0&h=180",
    status: "In Progress",
    themeColor: "bg-green-300"
  },
  // Add more projects here
];

function ProjectsComponent({ onBack }) {
  return (
    <div className="h-screen bg-cover bg-center text-white py-5 overflow-y-scroll" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-around items-center px-10">
        <h1 className="text-7xl text-center text-gray-50 font-[pricedown]">MY Projects</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="absolute mt-12 top-[1rem] left-[3rem]  text-red-200 py-2 px-4 rounded-lg  cursor-pointer  text-md font-semibold  transition-all font-[Helvetica_Now_Display] backdrop-blur-sm hover:bg-red-900 border border-red-300 shadow-2xl"
        >
          <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-red-900"></i> Go Back
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 max-w-7xl mx-auto mt-10">
        {projects.map((project, index) => (
          <div key={index} className={`relative p-6 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl transition-transform hover:scale-105 ${project.themeColor}`}>
            <div className="absolute top-2 right-2 px-3 py-1 text-sm rounded-full text-white uppercase bg-green-600 font-[Helvetica_Now_Display]">
              {project.status}
            </div>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold font-[Helvetica_Now_Display]">{project.title}</h2>
            <p className="mt-2 text-base font-mono">{project.description}</p>
            <button className="mt-4 bg-black text-yellow-300 px-4 py-2 rounded-full font-bold font-[Helvetica_Now_Display] hover:bg-white hover:text-black transition-all">
              View Mission Brief
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent