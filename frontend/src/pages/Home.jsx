import React from 'react'
import Hero from '../components/Hero.jsx'
import Fdestination from '../components/Fdestination.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Newsletter from '../components/Newsletter.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Fdestination/>
      <Testimonials/>
      <Newsletter/>
    </div>
  )
}

export default Home
