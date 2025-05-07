import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
    return (
      <div className='w-full h-[80vh] sm:h-[90vh] flex justify-center items-center'>
        <form  action="" className='bg-white w-[400px] shadow-sm p-10 flex flex-col gap-5 '>
          <h1 className='text-center text-lg font-semibold'>Update Profile</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className='p-2 bg-gray-200 outline-none text-sm' placeholder='Name'  />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className='p-2 bg-gray-200  outline-none text-sm' placeholder='Email'  />
          <button type='submit' className='rounded-sm bg-yellow-500 hover:bg-yellow-500 p-2 text-white cursor-pointer'>Update</button>
        </form>
      </div>
    )
}

export default UpdateProfile
