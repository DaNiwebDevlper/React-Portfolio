import { motion } from 'framer-motion'
import { InfiniteMovingCards } from '../../components/ui/InfiniteMovingCard'
const musicSchoolTestimonials = [
  { imgSrc: '/assets/html.png' },
  { imgSrc: '/assets/css.png' },
  { imgSrc: '/assets/javascript.png' },
  { imgSrc: '/assets/react.png' },
  { imgSrc: '/assets/node.png' }
]

const Skils = () => {

  return (
    <div className="sm:min-h-[60vh]  flex justify-center items-center flex-col">
      <h2 className='sm:text-5xl text-2xl font-bold font-madimi text-center my-9 sm:mb-[100px] text-white'><span className='text-teal-500 '>MERN </span> STACK DEVELOPER</h2>
      <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  )
}

export default Skils