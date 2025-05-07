import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password , setPassword] = useState("")
    const params = useParams();
    function resetPasswordHandler(e)
    {
        e.preventDefault();
        console.log(password);
        console.log(params.token)
        setPassword("");
    }
  return (
  
       <div className='h-[90vh] flex items-center justify-center'>
    <form action="" onSubmit={(e) => resetPasswordHandler(e)} className='w-[90%] md:w-1/2 lg:w-2/3 xl:w-1/3 flex flex-col gap-7 md:gap-5 justify-center'>
    <h1 className='text-center mb-10 md:mb-5 text-4xl   md:text-2xl font-bold'>Reset Password</h1>
     <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='p-5 sm:p-3  outline-none bg-gray-200'  placeholder='Enter a password' />
     <button type='submit'  className='bg-yellow-500 text-white text-sm hover:bg-yellow-400 p-5 sm:p-3 rounded-md' >Reset Password</button>
    </form>
    </div>
  
  )
}

export default ResetPassword
