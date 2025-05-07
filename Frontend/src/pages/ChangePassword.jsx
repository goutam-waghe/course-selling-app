import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword , setOldPassword] = useState("");
    const [newPassword , setNewPassword] = useState("");
  return (
    <div className='w-full h-[80vh] sm:h-[90vh] flex justify-center items-center'>
      <form  action="" className='bg-white w-[400px] shadow-sm p-10 flex flex-col gap-5 '>
        <h1 className='text-center text-lg font-semibold'>Change Password</h1>
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}  className='p-2 bg-gray-200 outline-none text-sm' placeholder='Old password'  />
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  className='p-2 bg-gray-200  outline-none text-sm' placeholder='New password'  />
        <button type='submit' className='rounded-sm bg-yellow-500 hover:bg-yellow-500 p-2 text-white cursor-pointer'>change</button>
      </form>
    </div>
  )
}

export default ChangePassword
