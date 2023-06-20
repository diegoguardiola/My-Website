import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './SocialMedia.scss'

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/DGuardiola17" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/diego-guardiola/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/diegoguardiola" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
      <a href="https://www.instagram.com/dguardiola/" target="_blank">
        <BsInstagram />
      </a>
      </div>
    </div>
  )
}

export default SocialMedia
