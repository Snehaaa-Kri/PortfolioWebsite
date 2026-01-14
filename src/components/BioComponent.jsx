import React from 'react'
import { motion } from 'framer-motion'
import bg from '../../public/bg1.png'
import resume from '../../public/sneha.pdf'

function BioComponent({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-cover bg-center text-white flex items-center justify-center px-3 py-6 sm:px-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Content Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative backdrop-blur-md bg-black/60 
        p-5 sm:p-10 rounded-3xl shadow-2xl 
        w-full sm:w-[90%] md:w-[70%] max-w-5xl"
      >
        {/* Go Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-yellow-500 hover:bg-yellow-400 text-black 
          px-4 py-2 rounded-lg text-sm sm:text-md 
           shadow-md fixed sm:absolute 
          top-3 left-3 sm:top-[-1.1rem] sm:left-[50%] 
          sm:-translate-x-1/2 z-50 font-mono font-semibold"
        >
          Go Back
        </motion.button>

        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl 
        text-center text-yellow-400 font-[pricedown] 
        mt-12 sm:mt-4 mb-4 sm:mb-6 tracking-wide">
          STILL RUNNING, NOT HUNTING
        </h1>

        {/* Bio Text */}
        <p className="text-sm sm:text-xl md:text-2xl 
        font-[Helvetica_Now_Display] tracking-wide 
        text-gray-200 leading-relaxed text-center">
          I’m <span className="text-yellow-300 font-bold">Sneha Kumari</span> — a curious coder, creative thinker, and someone who'd rather debug all night than give up on a solution.
          <br /><br />
          Currently pursuing a B.Tech in CSE at IIIT Una, I specialize in building <span className="text-yellow-300 font-bold">full-stack web applications</span> with clean UIs and solid backend systems.
          <br /><br />
          My stack includes <span className="text-yellow-300 font-bold">React.js, Node.js, Express.js, MongoDB, and Tailwind CSS</span>, with strong foundations in DSA, OOPs, DBMS, and OS.
        </p>

        {/* Resume Button */}
        <a href={resume} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-10 mx-auto block 
            bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 
            text-sm sm:text-xl rounded-lg shadow-md 
            hover:bg-yellow-400 tracking-widest"
          >
            Download Resume
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default BioComponent
