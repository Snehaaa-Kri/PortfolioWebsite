import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png';
import portfolioImg from '../../public/portfolio.jpg'
import grevionImg from '../../public/grevion.jpg'
import airconnectImg from '../../public/airconnect.jpg'

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
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
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
    <div className="min-h-screen bg-cover bg-center text-white pt-5 overflow-y-scroll" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-around items-center px-10">
        <h1 className="text-6xl text-center text-yellow-300 font-[pricedown]">MY PROJECTS</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-yellow-500 hover:bg-yellow-400  text-black absolute top-[1rem] left-[3rem] mt-12 py-2 px-4 rounded-lg cursor-pointer text-md font-semibold transition-all font-[Helvetica_Now_Display] backdrop-blur-sm  shadow-2xl"
        >
          <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-yellow-500"></i> Go Back
        </motion.button>
      </div>

      <div className="p-5 max-w-7xl mx-auto mt-2 bg-black/20  rounded-2xl shadow-xl text-white  flex gap-2 backdrop-blur-lg">
        {projects.map((project, index) => (
          <div key={index} className='py-2 px-4 rounded-2xl shadow-2xl bg-black/10 backdrop-blur-lg'>
            <img src={project.image} alt={project.title} className="rounded-lg w-full h-36 object-cover border mb-2" />

            <h2 className="text-yellow-300 text-2xl font-normal tracking-wide">{project.title}</h2>
            <h3 className="text-yellow-200 text-xl mb-4 font-[Helvetica_Now_Display]">{project.subtitle}</h3>

            <div className="mb-4">
              <h4 className="text-white text-xl font-normal tracking-widest underline mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-sm font-[Helvetica_Now_Display]">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-yellow-200 font-normal tracking-widest text-md underline mb-2 text-xl">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center text-xs">
                    <img src={tech.icon} alt={tech.name} className="h-6 w-6 object-contain" />
                    <span className="mt-1 font-[Helvetica_Now_Display]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-normal tracking-wider hover:bg-yellow-300 transition-all ">
                  Live Link →
                </button>
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent border border-yellow-400 text-yellow-300 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all font-normal tracking-wider">
                  Source Code →
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
