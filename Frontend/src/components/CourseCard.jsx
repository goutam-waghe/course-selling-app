import React from 'react'

const CourseCard = ({CourseDetails}) => {
    console.log(CourseDetails)
  return (
    <div className='bg-white p-2 w-[350px] h-[400px] mt-0 md:mt-0 mb-10 md:mb-0 sm:w-[210px] sm:h-[270px] border-2 shadow-lg'>
    <div className='mb-3 w-full h-[180px] sm:h-[100px] bg-red-400'>
    <img className='w-full object-fit' src='https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png' /> 
    </div>
    <div className='flex flex-col gap-1 pl-1'>
    <h1 className='text-lg '>{CourseDetails.name}</h1>
    <p className='text-sm'> {CourseDetails.Describe}</p>
    <p className='text-sm'>Creater - <span className='text-gray-700'>{CourseDetails.Creater}</span></p>
    <p className='text-sm'>Lecture - <span className='text-gray-700'>{CourseDetails.Lecture}</span></p>
    <p className='text-sm'>Views - <span className='text-gray-700'>{CourseDetails.Views}</span> </p>  
    </div>
    <div className='text-sm flex  justify-between  items-center mt-2'>
        <button className='text-white bg-yellow-500 hover:bg-yellow-400 px-2 py-1 rounded-sm'>Watch Now</button>
        <p className='text-yellow-500'>Add to playlist</p>
    </div>
   
    </div>
  )
}

export default CourseCard
