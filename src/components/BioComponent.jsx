import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png';

function BioComponent({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="backdrop-blur-md bg-black/60 p-10 rounded-3xl shadow-2xl w-[90%] md:w-[70%] max-w-5xl mt-4"
      >
        <h1 className="text-6xl md:text-7xl text-center text-yellow-400 font-[pricedown] mb-6 tracking-wide">
          STILL RUNNING, NOT HUNTING
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="absolute -top-[1.1rem] left-[50%] -translate-x-1/2 text-black py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer mx-auto block  text-md font-semibold shadow-md  transition-all font-[Helvetica_Now_Display]"
        >
          <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-yellow-500"></i> Go Back
        </motion.button>

        <p className="text-xl md:text-2xl font-[Helvetica_Now_Display] tracking-wide text-gray-200 leading-relaxed text-center">
          I’m <span className="text-yellow-300 font-bold">Sneha Kumari</span> — a curious coder, creative thinker, and someone who'd rather debug all night than give up on a solution.
          <br /><br />
         Currently pursuing a B.Tech in CSE at IIIT Una, I specialize in building <span className="text-yellow-300 font-bold">full-stack web applications</span> with clean UIs and solid backend systems. My stack includes <span className="text-yellow-300 font-bold">React.js, Node.js, Express.js, MongoDB, and Tailwind CSS</span>, backed by strong fundamentals in Data Structures, OOPs, DBMS, and OS.
          <br /><br />
          I’ve built full-stack projects like Petify, AirConnect, and the award-winning Grevion. I'm skilled in RESTful APIs, state management, and modern design with Tailwind CSS.
        </p>

        <a href="../../public/sneha.pdf" target='_blank'>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 mx-auto block bg-yellow-500 text-black px-8 py-4 text-xl font-normal rounded-lg shadow-md hover:bg-yellow-400 transition-all tracking-widest"
        >
          Download Resume
        </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default BioComponent;