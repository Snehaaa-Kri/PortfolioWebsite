import { useState, useRef, useEffect } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import SocialLinks from './components/SocialLinks'

import BottomNavigations from './components/BottomNavigations'




function App() {

  


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

  const aboutRef = useRef(null);
  // Scroll to the About section after it's rendered
  useEffect(() => {
    if (showAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAbout]);

  // Automatically reset showAbout to false after About is visible
  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowContent(false); // hide the landing
          setShowAbout(false);   // unmount About only after rendering
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>


      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000] flex justify-center items-center">
        {/* handling svg  */}
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidTMid slice'>
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill='black' />
              {/* //group */}
              <g className='vi-mask-group'>
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />

        </svg>
      </div>

      {/* landing page  */}
      {showContent && (
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
                  <audio ref={audioRef} src="../public/gtaTheme.mp3" loop />

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

              {/* //social links components */}
              <SocialLinks />
            </div>

            {/* bottom bar  */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full bg-gradient-to-b z-100">

              {/* <img className='h-[65px] absolute top-1/2 left-1/7 -translate-x-1/2 -translate-y-1/32' src="/ps5.png" alt="" /> */}

              {/* bottom navigations */}
                  <BottomNavigations />
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default App
