import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png'; // adjust path as needed

function BioComponent() {
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
        className="backdrop-blur-md bg-black/60 p-10 rounded-3xl shadow-2xl w-[90%] md:w-[70%] max-w-5xl"
      >
        <h1 className="text-6xl md:text-7xl text-center text-yellow-400 font-[pricedown] mb-6">
          STILL RUNNING, NOT HUNTING
        </h1>
        <p className="text-xl md:text-2xl font-[Helvetica_Now_Display] tracking-wide text-gray-200 leading-relaxed text-center">
          Just like a side quest in an open-world game, my journey into tech has been full of detours, discoveries, and deadlines.
          <br /><br />
          I’m <span className="text-yellow-300 font-bold">Sneha Kumari</span> — a curious coder, creative thinker, and someone who'd rather debug all night than give up on a solution.
          <br /><br />
          From hackathons to real-world deployments, I build things that solve real problems.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 mx-auto block bg-yellow-500 text-black px-8 py-4 text-xl font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-all"
        >
          Download Resume
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default BioComponent;
