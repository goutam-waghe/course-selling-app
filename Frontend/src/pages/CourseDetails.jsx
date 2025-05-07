import React, { useState } from 'react'
import video from "../assets/videos/intro.mp4"

const videoData = [
  {
    _id:1 ,
    title:"video 1" ,
    description:"abdnfjfosf dsnfnsfksjfslfk" ,
    video:{
      url:""
    } 
  } ,
  {
    _id:2 ,
    title:"video 2" ,
    description:"abdnfjfosf dsnfnsfksjfslfk" ,
    video:{
      url:""
    } 
  } ,
  {
    _id:3 ,
    title:"video 3" ,
    description:"abdnfjfosf dsnfnsfksjfslfk" ,
    video:{
      url:""
    } 
  } ,
  
]
const CourseDetails = () => {
  const [title , setTitle] = useState("video 1")
  const [ description, setDescription] = useState("donen")

  const lecture = 0
  return (
    
    <div className='grid  grid-cols-[1fr]  md:grid-cols-[5fr_2fr] gap-5   h-[80vh] md:min-h-fit pt-15 bg-gray-200'>
      <div className=' bg-white '  >
          <video src={video} controls  disablePictureInPicture controlsList='nodownload noplaybackrate' className='w-full p-1'></video>
          <div className='py-10 px-5 '>
            <h1 className='text-xl'>{title}</h1>
         
          <h1>Description</h1>
          <p>{description}</p>
          </div>
          
      </div>
      
      <div className='fflex flex-col gap-1 bg-gray-100 p-2 overflow-auto'>
        {
          videoData.map((element , index) => {

            return <button key={element._id} onClick={() =>{ setDescription(element.description)
               setTitle(element.title)}} className='cursor-pointer w-full p-2 border-2 bg-white border-gray-200'>{element.title}</button>
          })
        }
 
       
      </div>
    </div>
  )
}

export default CourseDetails
