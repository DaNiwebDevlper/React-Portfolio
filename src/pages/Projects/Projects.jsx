import React, { useState } from 'react';
import projects from '../../data/Projects.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((project) => project.stack === selectedFilter);

  const filterOptions = ['all', 'React', 'Next', 'JS'];



  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1, }}>

      <div
        className="flex flex-col justify-center items-center">
        <h1 className='md:text-4xl text-3xl font-bold my-5 text-slate-200'>My Creative <span className='text-teal-500'>Projects</span> Section</h1>


        <div className="flex gap-3 justify-center items-center my-6">

          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`mr-2 px-4 py-2 uppercase text-md md:text-lg rounded-full border border-teal-500 ${selectedFilter === option ? 'bg-teal-600 text-white' : 'text-teal-600'
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="md:w-[600px] w-[450px] h-[1px] bg-teal-600 mb-9"></div>


      </div>
      <div className='flex gap-5 flex-wrap justify-center mb-9'>
        {filteredProjects.map((project) => {


          return (
            <motion.div
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ duration: 1, type: "tween" }}
              className="w-[300px] shadow-lg shadow-black/50 md:w-[270px] h-[400px] bg-[#333] hover:border-teal-700 border-black border  rounded-xl overflow-hidden flex flex-col mx-5" key={project.id}>
              <div className="w-[300px] md:w-[270px] h-[180px] overflow-hidden">
                <Link to={"/projects/" + project.id}>
                  <img src={project.imgUrl} alt={project.title} className='object-cover hover:scale-110 transition-all h-fit ' /></Link>
              </div>

              <h1 className='text-teal-500 font-bold text-center py-3 text-2xl capitalize'>{project.title}</h1>
              <p className='text-slate-300 text-md px-5 text-justify pb-1'>{project.shortDescription}</p>

              <Link to={"/projects/" + project.id}>
                <button className='p-2 rounded-md text-md text-teal-500 ml-3 w-fit hover:underline cursor-pointer'>Read more &rarr;
                </button>
              </Link>
            </motion.div>)

        })}




      </div>
    </motion.div>
  );
};

export default Project;
