import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

//social links
import { linkedinLink, twitterLink, instagramLink, mailLink, githubLink } from '../constants/index.js'

function Landing() {

    // hero section animations
    const [showContent, setShowContent] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "power4.easeInOut",
            transformOrigin: "50% 50%"
        }).to(".vi-mask-group", {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: "Expo.easeInOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= 0.9) {
                    document.querySelector(".svg").remove();
                    setShowContent(true);
                    this.kill();
                }
            },
        })
    }, [])

    //on mouse move logic
    useGSAP(() => {
        //end logic
        if (!showContent) return;

        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-1",
            ease: "Expo.easeInOut",
        });

        gsap.to(".sky", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".bg", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".character", {
            scale: 0.7,
            x: "-50%",
            bottom: "-48%",
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".text", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });


        //

        const main = document.querySelector(".main");

        main?.addEventListener("mousemove", function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".main .text", {
                x: `${xMove * 0.4}%`,
            });
            gsap.to(".sky", {
                x: xMove,
            });
            gsap.to(".bg", {
                x: xMove * 1.7,
            });
        });
    }, [showContent])


    // music control logic 
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };


    // about me showing logic
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  }


    return (
        <>
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
                    <div className="landing w-full h-screen bg-black text-white">
                        {/* navbar  */}
                        <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
                            {/* logo  */}
                            <div className="logo flex gap-7 justify-between items-center">

                                <div className="lines flex flex-col gap-[5px]">
                                    <div className="line w-15 h-2 bg-white"></div>
                                    <div className="line w-8 h-2 bg-white"></div>
                                    <div className="line w-5 h-2 bg-white"></div>
                                </div>
                                {/* <h3 className="text-5xl -mt-[8px] leading-none text-white cursor-pointer">
                  Sneha
                </h3> */}

                                {/* //nav  */}
                                <div className="text-4xl flex justify-center items-center gap-4">
                                    {/* Audio element (hidden) */}
                                    <audio ref={audioRef} src="../../public/gtaTheme.mp3" loop />

                                    {/* Speaker Icon Toggle */}
                                    {isPlaying ? (
                                        <HiMiniSpeakerWave onClick={toggleMusic} className="cursor-pointer text-green-500 transition duration-300 transform hover:scale-115 " />
                                    ) : (
                                        <HiMiniSpeakerXMark onClick={toggleMusic} className="cursor-pointer text-red-500 transition duration-300 transform hover:scale-115 " />
                                    )}

                                    {/* Theme Toggle Icons — functionality optional */}
                                    <IoMdSunny className="cursor-pointer" />
                                    <FaRegMoon className="hidden cursor-pointer" />
                                </div>
                            </div>
                        </div>



                        {/* images div  */}
                        <div className="relative w-full h-screen overflow-hidden">
                            <img className='sky scale-[1.5] rotate-[-20deg] absolute left-0 top-0 w-full h-full object-cover' src="/clouds.png" alt="" />

                            <img className='bg absolute scale-[1.8] rotate-[-3deg] left-0 top-0 w-full h-full object-cover' src="/bg.png" alt="" />

                            <div className="bg text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] opacity-90">
                                {/* mern stack developer  */}
                                <h1 className="text-[8rem] leading-none left-0 translate-x-0 w-[90vw] text-center ">Mern stack developer</h1>
                                <h1 className="text-[11rem] leading-none ml-20 translate-x-1/8 ">sneha</h1>
                                <h1 className="text-[11rem] leading-none -ml-40 translate-x-2/5 ">kumari</h1>
                                {/* <h1 className="text-[11rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[11rem] leading-none ml-20">theft</h1>
                <h1 className="text-[11rem] leading-none -ml-40">auto</h1> */}
                            </div>
                            <img className='character absolute left-1/2 -bottom-[170%] translate-x-1/2 scale-[2] rotation-[-20deg] object-cover' src="/girl.png" alt="" />

                            <ul className='absolute right-0 top-0 text-4xl backdrop-blur-sm bg-white/15 rounded-t-full rounded-b-full py-10 px-1 translate-y-1/3 mr-1 text-gray-300 '>

                                <li className='hover:scale-110 p-2 rounded-md pt-5 pb-5 hover:text-white'>
                                    <a href={linkedinLink} target='_blank'>
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className='hover:scale-110 p-2 rounded-md pt-5 pb-5 hover:text-white'>
                                    <a href={twitterLink} target='_blank'>
                                        <FaXTwitter />
                                    </a>
                                </li>
                                <li className='p-2 rounded-md pt-5 pb-5 hover:scale-110 hover:text-white'>
                                    <a href={instagramLink} target='_blank'>
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className='hover:scale-110 p-2 rounded-md pt-5 pb-5 hover:text-white'>
                                    <a href={mailLink} target='_blank'>
                                        <CiMail />
                                    </a>
                                </li>
                                <li className='hover:scale-110 p-2 rounded-md pt-5 pb-5 hover:text-white cursor-pointer'>
                                    <a href={githubLink} target='_blank'>
                                        <FaGithub />
                                    </a>
                                </li>
                            </ul>

                        </div>

                        {/* bottom bar  */}
                        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-b">

                            <img className='h-[65px] absolute top-1/2 left-1/7 -translate-x-1/2 -translate-y-1/32' src="/ps5.png" alt="" />
                            <div className="flex justify-center items-center text-4xl -translate-y-[-33px] hover:scale-105 hover:ease-in-out duration-100" onClick={handleAboutClick}>
                                <i className="ri-arrow-down-line bg-white/20 py-2 px-3 font-bold rounded-l-full backdrop-blur-sm hover:bg-white/10"></i>
                                <h3 className='font-[Helvetica_Now_Display] font-semibold text-4xl bg-white/20 pl-4 py-2 px-3 rounded-r-full backdrop-blur-sm cursor-pointer hover:bg-white/10'>About Me</h3>
                            </div>

                        </div>

                    </div>
                </div>
        </>
    )
}

export default Landing