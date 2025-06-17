import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import bg from '../../public/bg1.png';
import dotenv from 'dotenv'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function ContactComponent({ onBack }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
      `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
      formRef.current,
      `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
    ).then(
      (result) => {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error(error);
      }
    );
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center text-white flex items-center justify-center pt-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative backdrop-blur-md bg-black/50 p-10 rounded-xl shadow-2xl w-[90%] md:w-[60%] max-w-3xl"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl text-center font-[pricedown] text-yellow-400 mb-10 tracking-wide"
        >
          LET'S CONNECT!
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="absolute -top-[1.1rem] left-[50%] -translate-x-1/2 text-black py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer mx-auto block text-md font-semibold shadow-md transition-all font-[Helvetica_Now_Display]"
        >
          <i className="ri-arrow-up-line absolute translate-x-1/3 text-3xl -translate-y-[2rem] text-yellow-500"></i> Go Back
        </motion.button>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-2xl font-normal mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-[Helvetica_Now_Display]"
            />
          </motion.div>

          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }}>
            <label className="block text-2xl font-normal mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-[Helvetica_Now_Display]"
            />
          </motion.div>

          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <label className="block text-2xl font-normal mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-[Helvetica_Now_Display]"
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-500 text-black font-normal text-xl rounded-lg hover:bg-yellow-400 transition duration-200 tracking-widest"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
}

export default ContactComponent;
