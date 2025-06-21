import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/AboutMe.png'
import TabNavigation from './TabNavigation'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaUniversity, FaSchool, FaJava, FaGitAlt, } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNpm, SiExpress, SiMongodb, SiRedux, SiCplusplus, SiPostman, SiVercel, SiNetlify } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { GiNothingToSay } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import CustomCursor from '../components/CustomCursor.jsx'

// swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const skills = [
    // My Skills
    { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'My Skills' },
    { label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'My Skills' },
    { label: 'Tailwind CSS', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg', category: 'My Skills' },
    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'My Skills' },
    { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'My Skills' },
    { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'My Skills' },
    { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'My Skills' },
    { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'My Skills' },
    { label: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'My Skills' },

    // Education
    { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Education' },

    // Experience
    { label: 'Nothing to display right now!', icon: 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f910.png', category: 'Experience' },

    // Additional Skills
    { label: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'Additional Skills' },
    { label: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Additional Skills' },
    { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Additional Skills' },
    { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Additional Skills' },
    { label: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Additional Skills' },

    // Tools
    { label: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000', category: 'Tools' },
    { label: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify/00C7B7', category: 'Tools' },
    { label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
];

const educationData = [
    {
        icon: <FaUniversity size={40} />,
        year: "2023–PRESENT",
        title: "B.Tech",
        course: "Computer Science & Engineering (CSE)",
        institute: "IIIT Una",
        points: [
            "Studied core subjects like DSA, DBMS, OS, OOP, and CN.",
            "Active contributor to DevTeams(college's official website) at IIIT Una.",
            "Projects: Grevion, Portfolio, AirConnect, and Petify."
        ]
    },
    {
        icon: <FaSchool size={40} />,
        year: "2021–2022",
        title: "Class – 12",
        percentage: "92.4%",
        institute: "Annie Besant International School, Patna",
        points: [
            "Excelled in senior secondary academics with 92.4%.",
            "Consistently achieved academic distinction across subjects."
        ]
    },
    {
        icon: <FaSchool size={40} />,
        year: "2019–2020",
        title: "Class – 10",
        percentage: "92.0%",
        institute: "Army Public School, Danapur Cantt",
        points: [
            "Achieved 92% in CBSE Class 10 board exams.",
            "Held leadership roles and contributed to school events."
        ]
    }
];

const experienceData = [
    {
        title: "Frontend Developer – DevTeams, IIIT Una",
        duration: "Jan 2024 – Present",
        location: "Remote",
        icon: <FaLaptopCode size={40} />,
        points: [
            "Contributed to the official IIIT Una website by building and maintaining responsive front-end components.",
            "Collaborated with the core development team to improve UI/UX and optimize performance.",
            "Worked with React.js, Tailwind CSS, and Git for version control."
        ]
    },
    {
        title: "Hackathon Finalist – Progothon Meraki 2025",
        duration: "Apr 2025",
        location: "IIIT Una",
        icon: <FaAward size={40} />,
        points: [
            "Secured 3rd place for building Grevion, a biomass trading platform under the AgriTech theme.",
            "Led the project and Contributed to backend apis creation and integration using MERN stack.",
            "Built a secure interface for transactions between SPOCs and power plants."
        ]
    }
];

function AboutComponent({ onBack }) {
    const [activeTab, setActiveTab] = useState('My Skills');
    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Re-enable when unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const filteredSkills = skills.filter(skill => skill.category === activeTab);


    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 780); // Tailwind's sm breakpoint = 640px
        };

        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="min-h-screen lg:h-screen bg-[url('https://wallpaperaccess.com/full/1614514.jpg')] bg-cover bg-center text-white py-5 relative px-1 sm:px-5 md:px-10">
                {/* <CustomCursor /> */}


                <div className="flex justify-around items-center px-10 cursor-pointer">

                    <h1 className="text-7xl text-center text-gray-50 font-[pricedown]">ABOUT ME</h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onBack}
                        className=" bg-yellow-500 hover:bg-yellow-400  text-black absolute mt-6 top-[0.3rem] sm:top-[1rem] left-[0.5rem] sm:left-[3rem] py-1 px-2 sm:py-2 sm:px-4 rounded-lg  cursor-pointer text-sm sm:text-md font-semibold  transition-all font-[Helvetica_Now_Display] backdrop-blur-sm border border-red-300 shadow-2xl"
                    >
                        <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-yellow-500"></i> Go Back
                    </motion.button>

                </div>

                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* //content box  */}
                <div className={`grid 
                    ${activeTab === 'Education' || activeTab === 'Experience'
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4'}
                    gap-6 p-5 max-w-6xl mx-auto bg-bg-white/10 backdrop-blur-md  border border-white/20 shadow-md mt-2 rounded-xl
`}>

                    {activeTab === 'Education' ? (

                        educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-lg bg-white/10 border-b-2 border-white shadow-lg rounded-xl p-6 text-white space-y-4"
                            >
                                <div className="text-5xl">{edu.icon}</div>
                                <p className="text-white text-3xl font-light">{edu.year} ({edu.title})</p>
                                {edu.course && <h3 className="text-xl font-mono">{edu.course}</h3>}
                                {edu.percentage && <p className="text-xl font-mono">Percentage – {edu.percentage}</p>}
                                {edu.gpa && <p className="text-xl font-mono">GPA – {edu.gpa}</p>}
                                <p className="text-yellow-300 font-mono">{edu.institute}</p>
                                {edu.points?.length > 0 && (
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        {edu.points.map((point, idx) => (
                                            <li key={idx} className="font-mono">{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    ) : activeTab === 'Experience' ? (
                        experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className="col-span-2 md:col-span-1 backdrop-blur-lg border-b-2 bg-white/10 border-white shadow-lg rounded-xl p-6 text-white space-y-4"
                            >
                                <div className="text-5xl ">{exp.icon}</div>
                                <h3 className="text-white text-2xl">{exp.title}</h3>
                                <p className="text-yellow-300 text-sm font-mono">{exp.duration} – {exp.location}</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="font-mono">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        filteredSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-lg border-b-2 bg-white/10 bg-opacity-90 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.label}
                                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                                    loading="lazy"
                                />
                                <p className="mt-2 text-md sm:text-xl font-mono font-semibold text-center">{skill.label}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
export default AboutComponent