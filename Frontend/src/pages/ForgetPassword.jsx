import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email , setEmail ]  = useState("")
    function forgetPasswordHandler(e)
    {
        e.preventDefault()
        console.log(email)
        setEmail("")
    }
  return (
    <div className='h-screen flex items-center justify-center'>
    <form action="" onSubmit={(e) => forgetPasswordHandler(e)} className='w-[90%] md:w-1/2 lg:w-2/3 xl:w-1/3 flex flex-col gap-7 md:gap-5 justify-center'>
    <h1 className='text-center mb-10 md:mb-5 text-4xl   md:text-2xl font-bold'>Forget Password</h1>
     <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='p-5 sm:p-3  outline-none bg-gray-200'  placeholder='example@gmail.com' />
     <button type='submit'  className='bg-yellow-500 text-white text-sm hover:bg-yellow-400 p-5 sm:p-3 rounded-md' >Send a reset link</button>
    </form>
    </div>
  )
}

export default ForgetPassword
