import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/AboutMe.png'
import TabNavigation from './TabNavigation'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaUniversity, FaSchool } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiBootstrap, SiNpm } from 'react-icons/si';
import CustomCursor from '../components/CustomCursor.jsx'


const skills = [
    { label: 'HTML', icon: <FaHtml5 size={40} />, category: 'My Skills' },
    { label: 'CSS', icon: <FaCss3Alt size={40} />, category: 'My Skills' },
    { label: 'Bootstrap', icon: <SiBootstrap size={40} />, category: 'My Skills' },
    { label: 'JavaScript', icon: <SiJavascript size={40} />, category: 'My Skills' },
    { label: 'React JS', icon: <FaReact size={40} />, category: 'My Skills' },
    { label: 'NPM', icon: <SiNpm size={40} />, category: 'Additional Skills' },
    { label: 'SQL', icon: <FaDatabase size={40} />, category: 'Experience' },
    { label: 'MongoDB', icon: <SiMongodb size={40} />, category: 'My Skills' },
    { label: 'MongoDB', icon: <SiMongodb size={40} />, category: 'Education' },
    // Add items for other tabs
];

const educationData = [
    {
        icon: <FaUniversity size={40} />,
        year: "2023–2027",
        title: "B.Tech",
        course: "Computer Science & Engineering (CSE)",
        // gpa: "8.38 / 10",
        institute: "IIIT Una",
        points: [
            "Graduated in Instrumentation and control engineering.",
            "Studied DS and other coding languages thoroughly.",
            "Led events and participated in technical societies, showing leadership and teamwork."
        ]
    },
    {
        icon: <FaSchool size={40} />,
        year: "2018",
        title: "Class – 12",
        percentage: "92.4%",
        institute: "Annie Besant International School, Patna",
        points: [
            "Had exemplary academic track record with multiple excellence awards.",
            "Represented school on national platforms."
        ]
    },
    {
        icon: <FaSchool size={40} />,
        year: "2016",
        title: "Class – 10",
        percentage: "92.0%",
        institute: "Army Public School, Danapur Cantt",
        points: [
            "Class Monitor for consecutive 2 years"
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
    return (
        <>
            <div className="h-screen bg-[url('https://wallpaperaccess.com/full/1614514.jpg')] bg-cover bg-center text-white py-5 relative">
                {/* <CustomCursor /> */}


                <div className="flex justify-around items-center px-10 cursor-pointer">

                    <h1 className="text-7xl text-center text-gray-50 font-[pricedown]">ABOUT ME</h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onBack}
                        className="absolute mt-6 top-[1rem] left-[3rem]  text-red-200 py-2 px-4 rounded-lg  cursor-pointer  text-md font-semibold  transition-all font-[Helvetica_Now_Display] backdrop-blur-sm hover:bg-red-900 border border-red-300 shadow-2xl"
                    >
                        <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-red-900"></i> Go Back
                    </motion.button>

                </div>


                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 max-w-6xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-md mt-2">
                    {filteredSkills.map((skill, index) => (
                        (activeTab === 'Education') ? (<>
                            <div className="flex flex-wrap gap-6 justify-center p-6 col-span-4">
                                {educationData.map((edu, index) => (
                                    <div className="backdrop-blur-lg border-b-2 bg-white/10 border-white shadow-lg rounded-xl p-6 text-white w-full md:w-[30%] space-y-4 col-span-2 ">
                                        <div className="text-5xl ">{edu.icon}</div>
                                        <p className="text-white text-4xl font-light">{edu.year} ({edu.title})</p>
                                        {/* <p className="uppercase text-2xl text-white font-light">{edu.title}</p> */}
                                        {edu.course && <h3 className="text-xl font-mono">{edu.course}</h3>}
                                        {edu.percentage && <p className="text-xl font-mono">Percentage – {edu.percentage}</p>}
                                        {edu.cgpa && <p className="text-xl font-mono">CGPA – {edu.cgpa}</p>}
                                        {edu.gpa && <p className="text-xl font-mono">GPA – {edu.gpa}</p>}
                                        <p className="text-yellow-300 font-mono">{edu.institute}</p>
                                        {edu.points.length > 0 && (
                                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                                {edu.points.map((point, index) => (
                                                    <li className='font-mono' key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>) : <>
                            <div
                                key={index}
                                className="backdrop-blur-lg border-b-2  bg-opacity-90 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
                            >
                                {skill.icon}
                                <p className="mt-2 text-xl font-mono font-semibold">{skill.label}</p>
                            </div>
                        </>

                    ))}
                </div>


            </div>
            {/* <h1 className='text-8xl bg-black text-white text-center pl-[30%] py-10'>my bio</h1>
            <div className="w-full h-screen flex items-center justify-center bg-black">
                <div className="cntnr flex text-white w-full h-[80%] ">
                    <div className="limg relative w-1/2 h-full ">
                        <img
                            className="absolute h-[110vh] scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="rg w-[40%] ">
                        <h1 className="text-6xl">Still Running,</h1>
                        <h1 className="text-6xl">Not Hunting</h1>
                        <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                            Just like a side quest in an open-world game, my journey into tech has been full of detours, discoveries, and deadlines. I'm Sneha Kumari — a curious coder, creative thinker, and someone who'd rather debug all night than give up on a solution.

                            From hackathons to real-world deployments, I’ve always loved building things that make people’s lives easier — whether it’s a pet adoption platform or a navigation solution for railway stations. I specialize in full-stack development, with a strong grip on React, Node.js, MongoDB, and whatever tool helps me bring an idea to life.

                            💻 I code with purpose.
                            🎮 I design with story.
                            🚀 I ship with impact.

                            Let’s just say — I’m not hunting for the next big thing.
                            I’m already building it.
                        </p>
                        <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                            Download Now
                        </button>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default AboutComponent