import React from 'react'
import Header from '../../components/Header/Header'
import { About, Projects, Skills } from "../index"


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

      <div className="mt-9">
        <Projects />
      </div>


    </div>
  )
}

export default Home