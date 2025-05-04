import React from 'react'
import bg from "../assets/images/bg.png"
import logo from "../assets/images/logo.png"
import {FaFacebook, FaGoogle, FaLinkedin, FaYoutube} from "react-icons/fa"
import video from "../assets/videos/intro.mp4"
const Home = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <div className='w-full dark:bg-gray-800 dark:text-white h-screen md:h-full flex flex-col'>
        <div className='flex justify-center h-screen flex-col md:flex-row gap-20 md:gap-30 md:pr-10 lg:gap-50 lg:pr-50 items-center md:self-end '>
            <div className='flex flex-col gap-5 items-center md:items-start'>
                <h1 className='text-3xl font-bold'>Learn from the Experts</h1>
                <p className='text-sm'>Explore Your Future: Discover Courses Tailored Just for You</p>
                <button className='bg-yellow-500 text-white rounded-md px-4 py-2 text-md hover:bg-yellow-400'>Get started</button>
            </div>
            <div className="w-[300px]" >
            
                <img src={bg} alt='bg image' className='animate-float float-img object-contain' />
            </div>
        </div>
        <div className='bg-black py-10'>
            <h1  className= 'text-center mb-10 text-2xl font-semibold text-amber-400'>Our Brands</h1>
        <div className='flex justify-between  px-20 md:px-50 xl:px-100  text-white'>
            <FaYoutube className='text-4xl hover:text-yellow-400'/>
            <FaLinkedin  className='text-4xl hover:text-yellow-400'/>
            <FaFacebook  className='text-4xl hover:text-yellow-400'/>
            <FaGoogle  className='text-4xl hover:text-yellow-400'/>

        </div>
        </div>
       
      </div>
      <div className='flex justify-center h-1/2 lg:h-screen items-center bg-[#eee]'>
        <video src={video} controls  loop disablePictureInPicture controlsList='nodownload  noplaybackrate' className='w-full p-10 lg:w-3/4'></video>

      </div>
    </div>
  )
}

export default Home
