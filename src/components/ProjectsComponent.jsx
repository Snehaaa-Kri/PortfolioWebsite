import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png';
import portfolioImg from '../../public/portfolio.jpg'
import grevionImg from '../../public/grevion.jpg'
import airconnectImg from '../../public/airconnect.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: " GTA-Themed Portfolio Website",
    subtitle: "React Based Portfolio Website",
    features: [
      "Built a GTA-inspired portfolio to creatively showcase personal projects, skills, and professional journey.",
      "Developed all components from scratch using React.js and JavaScript, ensuring modular and reusable structure.",
      "Implemented custom animations using CSS and jQuery to enhance interactivity and theme alignment.",
      "Worked on how to deploy a live website."
    ],
    techStack: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      // { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TailwindCSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    image: portfolioImg,
    liveLink: "https://portfolio-chi-six-ftiawtfif6.vercel.app/",
    codeLink: "https://github.com/Snehaaa-Kri/PortfolioWebsite.git",
    status: "Completed",
  },
  {
    title: "Grevion – Parali App",
    subtitle: "MERN Stack (Admin+SPOCs Dashboard)",
    features: [
      "Built a full-stack web application connecting SPOCs and power plants for biomass (parali) trading.",
      "Promoted sustainable biomass reuse to curb air pollution in Delhi and nearby regions.",
      "Streamlined secure listing and bidding with optimized UX.",
      "Secured 3rd place at Meraki 2025, IIIT Una under the AgriTech theme."
    ],
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
    ],
    image: grevionImg,
    liveLink: "#",
    codeLink: "https://github.com/Snehaaa-Kri/Grevion",
    status: "Completed"
  },
  {
    title: "AirConnect– Flight Booking App",
    subtitle: "MERN Stack (User+Admin Dashboard)",
    features: [
      "Developed a full-stack airline booking system with real-time flight search, booking, and user authentication.",
      "Implemented secure login and role-based access control with protected admin routes.",
      "Developed RESTful APIs using Node.js and Express.js.",
      "Managed global state with React Context API and used MongoDB for data storage."
    ],
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" }
    ],
    image: airconnectImg,
    liveLink: "#",
    codeLink: "https://github.com/Snehaaa-Kri/AirlineBookingSystem",
    status: "Completed"
  }
];

function ProjectsComponent({ onBack }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-1 px-3 sm:px-10 overflow-y-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 relative ">
        <h1 className="text-3xl sm:text-6xl text-center text-yellow-300 font-[pricedown] tracking-wide">
          MY PROJECTS
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="fixed sm:absolute top-3 left-3 sm:top-4 sm:left-10
          bg-yellow-500 hover:bg-yellow-400 text-black 
          py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg 
          text-xs sm:text-md font-semibold shadow-xl z-50 font-mono"
        >
          Go Back
        </motion.button>
      </div>

      {/* ---------- MOBILE / TABLET : SWIPER ---------- */}
      <div className="block lg:hidden mt-6">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={15}
          slidesPerView={1.1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------- DESKTOP : GRID 3 ---------- */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto backdrop-blur-lg bg-black/20 p-5 rounded-2xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}


export default ProjectsComponent;
