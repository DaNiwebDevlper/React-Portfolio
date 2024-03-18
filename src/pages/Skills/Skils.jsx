import { motion } from 'framer-motion'
import skills from '../../data/Skills.json'
const Skils = () => {
  const backgroundImage = {
    position: "relative",
    background: ' url("/assets/skillbg.svg") no-repeat',
    backgroundSize: "cover",
    backgroundPosition: " center",
    backgroundRepeat: "repeat",
}
  return (
    <motion.div
    whileInView={{y:[100, 0], opacity:[0,1]}}
    transition={{duration:1}}>

    <div className="w-full min-h-[90vh]" style={backgroundImage}>
        <div className='text-white text-3xl md:text-4xl text-center my-9'>
          <h1 className='font-semibold'><span className='text-teal-500 text-bold'>MERN STACK</span> Developer <br /><span> </span></h1>
        </div>


        <div className="grid sm:grid-cols-4 grid-cols-2 place-content-center gap-y-9 justify-items-center sm:px-9 px-5">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className='w-[200px] md:w-[250px] rounded-xl overflow-hidden bg-sec-color'
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