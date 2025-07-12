import React from 'react'
import Header from '../../components/Header/Header'
import { About, Experience, Projects, Skills, Services } from "../index"
import AnimatedContact from '../Contact/AnimatedContact'



const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-9">
        <About />
      </div>
      <div className="my-9">
        <Projects />
      </div>
      <div className="mt-9">
        <Skills />
      </div>
      <div className="mt-[100px]">
        <Experience />
      </div>
      {/* <div className="mt-9">
        <AnimatedContact />
      </div> */}

    </div>
  )
}

export default Home