import React from 'react'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const PaymentFailed = () => {
  return (
   <div className='flex gap-5  flex-col justify-center items-center h-[80vh] sm:h-[90vh]'>
         <h1 className='text-2xl font-semibold'></h1>
         <div className='w-[300px]   flex flex-col gap-5 rounded  overflow-hidden shadow-sm'>
           <div className='px-4 text-white py-3 bg-red-500 text-sm'>Payment Failed</div>
           <FaExclamationCircle  className='self-center text-4xl'/>
           <p className='self-center text-sm font-medium mb-5 rounded-sm cursor-pointer p-2 hover:bg-gray-200'>Try Again</p>

         </div>
    </div>
  )
}

export default PaymentFailed
