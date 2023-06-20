import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components'


const About = () => {

  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const query = '*[_type == "about"]'
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <div>
      <h2 className='head-text'>About Me
      </h2>
      <div className='about-description'>
        <p className='about-text'>
        I am a mechanical engineer turned software developer with a passion 
        for creating innovative solutions. My strong foundation in engineering 
        principles and problem-solving, allows me to bring a unique perspective to 
        the world of software development. My experience in both fields 
        allows me to approach challenges with a blend of technical expertise and a 
        creative mindset. I thrive in collaborative environments and am adept at 
        translating complex technical concepts into user-friendly applications. 
        </p>
        <p className='about-text'>
          In my spare time I enjoy training, reading, and working on my passion projects
          which range from mechatronic inventions to writing a book on consciousness.
        </p>
      </div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{margin: 20}}>{about.title}</h2>
            <p className='p-text' style={{margin: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      <h3>
        Social Media
      </h3>
      <SocialMedia />
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About',
  'app__whitebg',
);