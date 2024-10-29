import { animate, motion } from 'framer-motion'
import header from "../../data/Header.json"
const Header = () => {

    const sclaeVariants = {
        animate: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    const backgroundImage = {
        position: "relative",
        background: ' url("/assets/bg.svg") no-repeat',
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: "repeat",
    }
    return (
        <div className='app min-h-[90vh] md:h-[90vh] relative' style={backgroundImage}>
            <div className="grid grid-rows-3 md:grid-cols-[1fr_minmax(200px,500px)_1fr] w-full h-full">
                {/* /////---Intro-Badge---//// */}
                <div className="flex md:justify-center justify-start  items-center  md:h-[90vh] ml-5">
                    <motion.div
                        animate={{ y: [200, 50], opacity: [0, 1] }}
                        transition={{ duration: 1.3 }}>

                        <div className='bg-teal-500/10 w-[200px] h-[100px] rounded-xl flex flex-col justify-center items-center mt-[-100px] '>
                            <p className='text-lg text-slate-200 pr-12'> <span>👋 </span>Hello, I am</p>
                            <h1 className='text-3xl pl-5 py-1 font-bold text-slate-100'>{header.name}</h1>
                        </div>

                        <div className="bg-teal-500/10 text-lg w-fit px-7 uppercase mt-5 py-3 rounded-xl flex flex-col justify-center items-center ">
                            <p className='text-md text-slate-200 '>{header.skill}</p>
                            <p className='text-md text-slate-200'>{header.jobtitle}</p>
                        </div>
                    </motion.div>
                </div>
                {/* /////---Picture-badge---//// */}
                <div className="md:mt-[100px] ">

                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delayChildren: 1 }}
                        className='relative flex flex-1 h-full justify-center sm:justify-end sm:items-end'>

                        <img src="/assets/profile.png" alt="profile_bg" className='z-10 relative md:top-[345px] md:right-[70px] md:w-[350px] w-[240px] bottom-7 ' />

                        <motion.img
                            animate={{ scale: [0, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            src="assets/circle.svg"
                            alt='profile-circle'
                            className='md:w-[400px] w-[280px] z-0 top-0 md:right-[55px]  absolute opacity-40' />

                    </motion.div>

                </div>
                {/* /////---Description-badge---//// */}
                <motion.div
                    variants={sclaeVariants}
                    animate={sclaeVariants.animate}
                    className='flex flex-1 md:flex-col  md:h-screen gap-3 md:items-start items-start justify-center md:justify-center'>
                    {header.skillsImages.map((image, index) => (
                        <div className='w-[80px] h-[80px] bg-teal-600/20 mt-9 md:mt-0  rounded-full flex items-center justify-center even:w-[120px] even:h-[120px] md:even:ml-9 even:mt-[80px] md:even:mt-0' key={`circle-${index}`}>
                            <img src={image} alt="circle" className='w-[60px] h-[60px] ' key={index} />
                        </div>
                    ))}
                </motion.div>
            </div>

        </div >
    )

}

export default Header