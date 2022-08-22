import React from 'react'
import Hero from './Hero.js/Hero'
import Team from './Team/Team'
import Values from './Values/Values'
import Who from './Who/Who'
import Why from './Why/Why'

const AboutUs = () => {
  return (
    <div className="max-wrapper">
        <Hero/>
        <Who/>
        <Why/>
        <Values/>
        <Team/>
    </div>
  )
}

export default AboutUs