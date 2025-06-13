import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
//social links
import { linkedinLink, twitterLink, instagramLink, mailLink, githubLink } from '../constants/index.js'

function SocialLinks() {
  return (
    <>
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
    </>
  )
}

export default SocialLinks