import React from 'react'
import about from '../../data/About.json'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { AiFillMail, AiFillGithub } from 'react-icons/ai'
const About = () => {

  const openGmail = ({gmail}) => {
    window.location.href = `mailto:${about.gmail}`;
  };
  return (
    <motion.div
    whileInView={{y:[100,0], opacity:[0,1]}}
    transition={{duration: 1}}>

    <div className='flex flex-col items-center justify-center w-full min-h-[90vh] text-gray-200'>
      <div className="w-[200px] h-[200px] overflow-hidden bg-gradient-to-r from-teal-600 to-teal-300 rounded-full p-2">
        <img src={about.imgUrl} alt={about.title} className='w-[200px] h-[300px] object-cover rounded-full mb-5' />
      </div>

      <h1 className='text-5xl uppercase my-3 font-semibold bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent'>{about.title}</h1>
      <p className='md:text-md text-white/60 text-lg text-justify p-5 md:w-[60%] w-[80%]'>
        {about.description}
      </p>

      {/* ///////////////---Buttons---/////////////// */}

      <div className="flex my-5">
        <button className='py-2 px-4 bg-gradient-to-b from-teal-700 to-teal-500  rounded-full border border-teal-300 hover:from-black/10 transition-all shadow-lg mx-5 '><a href={about.cv} target='_blank' className='md:text-lg' download={about.cv}> Download CV</a> </button>

        <button className='py-2 px-6 rounded-full border border-teal-300 hover:bg-gradient-to-b from-teal-700 to-teal-500 transition-all uppercase shadow-lg'><a href={about.upWork} target='_blank' className='md:text-lg'>Hire Me</a> </button>
      </div>
      <div className="md:w-[500px] w-[350px] h-[1px] bg-teal-500 my-5"></div>

      {/* /////////////---Social-Links---///////////// */}
      <div className="flex gap-5 my-5">
        <div className="w-[40px] h-[40px] border rounded-full flex justify-center hover:bg-teal-700 items-center ">
          <a href={about.linkedin} target='_blank'><FaLinkedin className='text-2xl' /></a>
        </div>

        <div className="w-[40px] h-[40px] border rounded-full flex justify-center hover:bg-teal-700 items-center ">
          <a href={about.upWork} target='_blank'><SiUpwork className='text-2xl' /></a>
        </div>

        <div className="w-[40px] h-[40px] border rounded-full flex justify-center hover:bg-teal-700 items-center">
   <AiFillMail className='text-[27px]' onClick={openGmail} />
          
        </div>

        <div className="w-[40px] h-[40px] border rounded-full flex justify-center hover:bg-teal-700 items-center">
          <a href={about.gitHub} target='_blank'><AiFillGithub className='text-[27px]' /></a>
          
        </div>





      </div>
    </div>
    </motion.div>
  )
}

export default About