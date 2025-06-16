import React, { useEffect } from 'react';
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

function ProjectsComponent() {
  return (
    <div className="h-screen bg-cover bg-center text-white py-5 overflow-y-scroll" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-around items-center px-10">
        <h1 className="text-7xl text-center text-gray-50 font-[pricedown]">MY Projects</h1>
        <div className="flex justify-end items-center mr-8">
          <div className="flex justify-center items-center text-4xl hover:scale-105 duration-100 w-fit text-red-600 hover:border cursor-pointer rounded-full">
            <h3 className='font-[Helvetica_Now_Display] font-semibold text-4xl bg-white/10 pl-4 py-2 px-3 rounded-l-full backdrop-blur-sm hover:bg-white/10 '>Contact Me</h3>
            <i className="ri-arrow-right-line bg-white/10 py-2 px-3 font-bold rounded-r-full backdrop-blur-sm "></i>
          </div>
        </div>
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