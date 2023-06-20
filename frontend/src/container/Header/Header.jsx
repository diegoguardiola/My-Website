import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion'
import './Header.scss'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {


  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app_header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'> 

            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, my name</p>
              <h1 className='head-text'>Diego</h1>
            </div>
          </div>

          <div className='badge-cmp app__flex'>
            <p className='p-text'>I am full-stack developer based in New York, NY.</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img circular-crop"
    >
      <img src={images.DG_pfp} alt="profile_bg"/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>

      

    </div>
  )
}

export default AppWrap(Header, 'Home');
