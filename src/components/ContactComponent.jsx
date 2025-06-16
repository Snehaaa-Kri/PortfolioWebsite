import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../public/bg1.png';

function ContactComponent() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="backdrop-blur-md bg-black/50 p-10 rounded-xl shadow-2xl w-[90%] md:w-[60%] max-w-3xl"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl text-center font-[pricedown] text-yellow-400 mb-10"
        >
          CONTACT ME
        </motion.h1>

        <form className="space-y-6">
          {['Name', 'Email', 'Message'].map((label, idx) => (
            <motion.div
              key={label}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
            >
              <label className="block text-lg font-semibold mb-1">{label}</label>
              {label === 'Message' ? (
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              ) : (
                <input
                  type={label === 'Email' ? 'email' : 'text'}
                  placeholder={`Your ${label}`}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-500 text-black font-bold text-xl rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactComponent;
