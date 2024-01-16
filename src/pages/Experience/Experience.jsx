import React from 'react'
import experience from "../../data/Experience.json"
import education from "../../data/Education.json"
import { motion } from 'framer-motion';
const Experience = () => {
  return (

    <div className='w-full min-h-[90vh] flex flex-col md:flex-row justify-center items-center gap-9 flex-wrap mt-9'>
      {/* //////////////---Experince---/////// */}
      <div className="md:w-[35%] w-[80%] rounded-lg text-white bg-[#333]/30 min-h-[80%]
      flex justify-center flex-col items-center py-5 ">
        <h1 className='uppercase text-2xl font-semibold text-center text-teal-500 mb-3 shadow-md'>Experience</h1>

        <div className="text-white w-[80%] flex flex-col gap-6 ">
          {experience.map((exp) => {
            return (
              <>
                <motion.div
                  whileInView={{ y: [10, 0], opacity: [0, 1] }}
                  transition={{ duration: 2, }}>
                  <div className='flex flex-col gap-2 border-l-2 border-teal-400 ml-1 pl-3 relative'>
                    <div className="w-3 h-3 rounded-full bg-teal-400 absolute left-[-7px]"></div>
                    <h2 className='text-xl text-white'>{exp.jobTitle}</h2>
                    <p className='text-md text-white/90'>{exp.company}</p>
                    <p className='text-sm text-justify text-white/60'>{exp.description}</p>
                  </div>
                </motion.div>
              </>)
          })}
        </div>
      </div>
      {/* //////////////---Education---/////// */}
      <div className="md:w-[35%] w-[80%] rounded-lg text-white bg-[#333]/30 min-h-[80%]
      flex justify-center flex-col items-center py-5 shadow-md mb-9 md:mb-0">
        <h1 className='uppercase text-2xl font-semibold text-center text-teal-500 mb-3'>Education</h1>
        <div className="text-white w-[80%] flex flex-col gap-5" >
          {education.map((edu) => {
            return (
              <>
                <motion.div
                  whileInView={{ y: [10, 0], opacity: [0, 1] }}
                  transition={{ duration: 1, }}>
                  <div className='flex flex-col gap-2 border-l-2 border-teal-400 ml-1 pl-3 relative'>
                    <div className="w-4 h-4 rounded-full border-2 border-teal-400 absolute left-[-9px] top-[-14px]"></div>

                    <h2 className='text-xl text-white'>{edu.degree}</h2>
                    <p className='text-md text-white/80 underline'>{edu.insitute}</p>
                    <p className='text-sm text-justify text-white/60'>{edu.course}</p>
                  </div>
                </motion.div>
              </>
            )
          })}
        </div>
      </div>

    </div>

  )
}

export default Experience