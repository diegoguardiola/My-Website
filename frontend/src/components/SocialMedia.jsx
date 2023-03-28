import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  )
}

export default SocialMedia
