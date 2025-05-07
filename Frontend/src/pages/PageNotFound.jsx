import React from 'react'
import {   FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <FaExclamationTriangle className='text-red-500 text-4xl'/>
      <h1 className='text-2xl font-bold'>Page not Found</h1>
     <Link to={"/"}><button className='text-sm p-2 font-medium text-white cursor-pointer bg-gray-500 rounded-sm'>Go the Home</button></Link> 
    </div>
  )
}

export default PageNotFound
