import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'

const ContactUs = () => {
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")
    function contactHandler(e)
    {
        e.preventDefault();
        setEmail("")
        setMessage("")
        setUsername("")
    }
  return (
    <div className='flex items-center justify-center h-[80vh] sm:h-[90vh]'>
      <form action="" onSubmit={(e) => contactHandler(e)} className=' flex flex-col   gap-4 text-md sm:text-sm w-[90%] sm:w-[70%] md:w-[60%] lg:w-1/2 xl:w-1/3'>
        <h1 className='text-center font-bold sm:text-3xl text-2xl'>Contact Us</h1>
        <div className='flex flex-col gap-1'>
        <label  htmlFor="name">Name</label>
        <input value={username} onChange={e => setUsername(e.target.value)} className='p-4 sm:p-2 outline-none bg-gray-200' type="text" id='name' placeholder='Name'/>
        </div>
        <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className='p-4 sm:p-2 outline-none bg-gray-200' type="email" id='email' />
        </div>
        <div className='flex flex-col gap-1'>
        <label htmlFor="message">Message</label>
        <textarea  value={message} onChange={e => setMessage(e.target.value)} className='p-2 outline-none h-[130px] md:h-[80px]  resize-none bg-gray-200' name="" id="message" placeholder='Message'>

        </textarea>
        </div>

        <button type='submit' className='bg-yellow-500 hover:bg-yellow-400 p-4 sm:p-2'>Send To mail</button>
        <p>Request a course <Link to={"/requestcourse"} className='text-yellow-500'>click</Link></p>
        
       
      </form>
    </div>
  )
}

export default ContactUs
