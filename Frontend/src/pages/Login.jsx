import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { login } from '../redux/actions/userActions'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    function loginBtnHandler(e){
        e.preventDefault();
       dispatch(login(email , password))   
    }



    return (
        <div onSubmit={(e) => loginBtnHandler(e)} className='w-full h-[80vh] sm:h-[90vh] flex justify-center items-center'>
            <form className='w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-4 justify-center shadow-lg rounded-sm p-10' action="">
                <h1 className='text-center text-lg font-medium'>Wellcome Back</h1>
                <div className=' flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input className=' bg-gray-200 p-2 outline-none  rounded-sm' required value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='Enter your Email' />
                </div>
                <div  className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input className='bg-gray-200 p-2 outline-none  rounded-sm' required value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder='Enter your Password' />
                </div>
                <Link to={"/forgetpassword"}><button className='text-sm'>Forget Password?</button></Link>
                <button type='submit' className='bg-yellow-500 p-2 text-white font-medium hover:bg-yellow-400'>Submit</button>
                <button className='text-sm'>  Don't have an Account ? <Link to={"/signup"}>signup</Link></button>

            </form>
        </div>
    )
}

export default Login
