import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TabNavigation from './TabNavigation'
import { FaUniversity, FaSchool } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa6'

// const skills = [
//   { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'My Skills' },
//   { label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'My Skills' },
//   { label: 'Tailwind CSS', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg', category: 'My Skills' },
//   { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'My Skills' },
//   { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'My Skills' },
//   { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'My Skills' },
//   { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'My Skills' },
//   { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'My Skills' },
//   { label: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'My Skills' },
// ]

const skills = [ // My Skills 
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
        icon: <FaUniversity size={36} />,
        year: "2023–PRESENT",
        title: "B.Tech",
        course: "Computer Science & Engineering (CSE)",
        institute: "IIIT Una",
        points: [
            "Studied DSA, DBMS, OS, OOP, CN.",
            "Contributor at DevTeams IIIT Una.",
            "Projects: Grevion, Portfolio, AirConnect, Petify."
        ]
    },
    {
        icon: <FaSchool size={36} />,
        year: "2021–2022",
        title: "Class 12",
        percentage: "92.4%",
        institute: "Annie Besant Int. School, Patna",
        points: ["Secured 92.4% in CBSE Boards."]
    }
]

const experienceData = [
    {
        title: "Backend Developer – DevTeams",
        duration: "Jan 2024 – Present",
        location: "Remote",
        icon: <FaLaptopCode size={36} />,
        points: ["Worked on React UI for college website."]
    },
    {
        title: "Hackathon Finalist – Progothon Meraki 2025",
        duration: "Apr 2025",
        location: "IIIT Una",
        icon: <FaAward size={36} />,
        points: ["Built Grevion – AgriTech MERN platform."]
    }
]

function AboutComponent({ onBack }) {
    const [activeTab, setActiveTab] = useState('My Skills')

    useEffect(() => {
        if (window.innerWidth > 768) document.body.style.overflow = 'hidden'
        return () => (document.body.style.overflow = 'auto')
    }, [])

    const filteredSkills = skills.filter(skill => skill.category === activeTab)

    return (
        <div className="min-h-screen bg-[url('https://wallpaperaccess.com/full/1614514.jpg')] bg-cover bg-center text-white py-4 px-3 sm:px-10">

            {/* Back Button */}
            <motion.button
                onClick={onBack}
                className="bg-yellow-500 text-black fixed z-50 top-3 left-3 px-3 py-1.5 rounded-lg text-xs sm:text-md font-semibold font-mono shadow-xl"
            >
                Go Back
            </motion.button>

            {/* Heading */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
                <h1 className="text-4xl sm:text-7xl font-[pricedown]">ABOUT ME</h1>
            </div>

            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content Grid */}
            <div className={`grid 
      ${activeTab === 'Education' || activeTab === 'Experience'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}
      gap-4 sm:gap-6 p-3 sm:p-5 max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-xl`}>

                {activeTab === 'Education' &&
                    educationData.map((edu, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-xl font-semibold font-mono">
                            <div>{edu.icon}</div>
                            <p className="text-lg sm:text-2xl">{edu.year}</p>
                            <h3 className="text-sm sm:text-lg">{edu.course}</h3>
                            <p className="text-yellow-300">{edu.institute}</p>
                        </div>
                    ))}

                {activeTab === 'Experience' &&
                    experienceData.map((exp, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-xl font-semibold font-mono">
                            <div>{exp.icon}</div>
                            <h3 className="text-lg">{exp.title}</h3>
                            <p className="text-yellow-300 text-xs">{exp.duration}</p>
                        </div>
                    ))}

                {(activeTab === 'My Skills' || activeTab === 'Additional Skills' || activeTab === 'Tools') &&
                    filteredSkills.map((skill, i) => (
                        <div key={i} className="bg-white/10 p-2 sm:p-4 rounded-lg flex flex-col items-center">
                            <img src={skill.icon} className="w-8 h-8 sm:w-12 sm:h-12" />
                            <p className="text-xs sm:text-lg mt-2 text-center font-mono font-semibold">{skill.label}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AboutComponent
