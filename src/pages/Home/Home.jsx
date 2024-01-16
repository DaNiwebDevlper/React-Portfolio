import React from 'react'
import Header from '../../components/Header/Header'
import { About, AnimatedContent, Experience, Projects, Skills } from "../index"


const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-9">
        <About />
      </div>

      <div className="mt-9">
        <Skills />
      </div>

      <div className="my-9">
        <Projects />
      </div>
      <div className="mt-[100px]">
        <Experience />
      </div>

    </div>
  )
}

export default Home