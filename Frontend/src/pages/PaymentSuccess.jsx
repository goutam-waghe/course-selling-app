import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const PaymentSuccess = () => {
  return (
    <div className='flex gap-5  flex-col justify-center items-center h-[80vh] sm:h-[90vh]'>
      <h1 className='text-2xl font-semibold'>Your payment is successful</h1>
      <div className='w-[300px] flex flex-col gap-5 rounded  overflow-hidden shadow-sm'>
        <div className='px-4 py-3 bg-yellow-500 text-sm'>Payment success</div>
        <p className='w-[80%] self-center text-sm'>Congratulation. you are pro member. you have access all primium content</p>
        <FaCheckCircle className='self-center text-4xl'/>
        <p className='self-center text-sm font-medium rounded-sm cursor-pointer p-2 hover:bg-gray-200'>Go to profile</p>
        <p className='px-4 pb-4'>Refrence - <span>abcndsnsfs</span></p>
      </div>
    </div>
  )
}

export default PaymentSuccess
