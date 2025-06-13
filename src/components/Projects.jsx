import React, { useEffect } from 'react';

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

function Projects() {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = 'auto'; };
//   }, []);

  return (
    <div className="h-screen bg-[url('https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-0638-622f-96b0-d8e81acd56da/raw?se=2025-06-13T13%3A44%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=9635ba4d-4117-54a3-ab88-de82b96abb47&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-13T11%3A13%3A15Z&ske=2025-06-14T11%3A13%3A15Z&sks=b&skv=2024-08-04&sig=sLWwiSt57NPplSKqUAJPUCKTiTk%2Bxes4HzcrzSTJht8%3D')] bg-cover bg-center text-white py-5 overflow-y-scroll">
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

export default Projects;