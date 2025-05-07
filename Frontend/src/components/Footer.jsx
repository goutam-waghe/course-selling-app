import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-[20vh] gap-5 sm:gap-0 md:h-[10vh] flex flex-col sm:flex-row  sm:justify-between justify-center items-center px-4 py-6 sm:px-10 bg-gray-800'>
      <div className='flex sm:flex-col flex-row gap-2 sm:text-sm text-white'>
        <h1>All right reserved</h1>
        <p>@goutam waghe</p>
      </div>
      <div className='flex gap-7 text-xl text-white'>
        <a className='hover:text-yellow-400' href="https://www.instagram.com/goutam___30/" target='_blank'><FaLinkedin/></a>
        <a className='hover:text-yellow-400' href="https://www.instagram.com/goutam___30/" target='_blank'><FaFacebook/></a>
        <a className='hover:text-yellow-400' href="https://www.instagram.com/goutam___30/" target='blank'><FaYoutube/></a>
        <a className='hover:text-yellow-400' href="https://www.instagram.com/goutam___30/" target='blank'><FaInstagram/></a>
      </div>
    </div>
  )
}

export default Footer
