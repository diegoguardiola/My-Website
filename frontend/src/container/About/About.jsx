import React from 'react'
import './About.scss'
import {images} from '../../constants/'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const abouts = [
  { title: 'Full Stack Developer', description: '1 year of experience', imgURL: images.about01 }, 
  { title: 'Automation Enfgineer', description: '3 years of experience', imgURL: images.about02 }, 
  { title: 'Mechanical Engineer', description: '2 years of experience', imgURL: images.about03 }, 
]
const About = () => {
  return (
    <div>
      <h2 className='head-text'>I know that 
        <span> Good Design </span>
        <br />
        means 
         <span> Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className='bold-text' style={{margin: 20}}>{about.title}</h2>
            <p className='p-text' style={{margin: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
