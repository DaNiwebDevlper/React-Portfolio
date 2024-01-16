import React from 'react'
import { motion } from 'framer-motion'
import skills from '../../data/Skills.json'
const Skils = () => {
  return (
    <motion.div
    whileInView={{y:[100, 0], opacity:[0,1]}}
    transition={{duration:1}}>

    <div className="w-full min-h-[90vh]">
        <div className='text-white text-2xl md:text-4xl text-center mt-9'>
          <h1 className='font-semibold'><span className='text-teal-500 text-bold'>MERN STACK</span> Developer <br /><span>Create Full-Stack<span className='text-teal-500'> Responsive Sites</span> </span></h1>
        </div>


        <div className="flex flex-wrap gap-9 justify-center  mt-9 pb-9">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className='w-[200px] md:w-[250px] rounded-xl overflow-hidden bg-[#333]'
              key={index}>

              <img src={skill.imgUrl} alt={skill.title}
                className='h-[120px] w-full object-cover' />
              <h1 className='text-xl text-center pt-2 text-teal-500 font-semibold'>{skill.title}</h1>

              <p className='text-[14px] text-slate-300 text-center py-2 px-1 pb-3'>{skill.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skils