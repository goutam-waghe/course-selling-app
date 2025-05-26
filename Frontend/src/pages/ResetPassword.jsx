import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../redux/actions/profileActions';
import { LoadUser } from '../redux/actions/userActions';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const navigate = useNavigate()
    const [password , setPassword] = useState("")
    const {token} = useParams();
    const dispatch = useDispatch();
    async function resetPasswordHandler(e)
    {
        e.preventDefault();
       await dispatch(resetPassword(token , password));
       navigate("/login")
       setPassword("");
    }
    const {loading , error , message} = useSelector(state => state.profile)

  useEffect(() => {
      if(error)
      {
        toast.error(error)
        dispatch({type:"clearError"})
      }
      if(message)
      {
        toast.success(message)
        dispatch({type:"clearMessage"})
      }
    } , [dispatch , error , message])
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
