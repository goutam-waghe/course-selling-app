import React from 'react'

const Subscribe = () => {
  return (
    <div className=' flex flex-col gap-5 justify-center h-[80vh] sm:h-[90vh] items-center'>
      <h1 className='text-center font-bold text-xl '>Well Come</h1>
      <div className='flex flex-col gap-8 rounded-lg shadow-sm overflow-hidden'>
        <div className='bg-yellow-500 px-2 py-2 text-sm'>
            pro pack - $10
        </div>
        <p className='text-sm self-center w-[80%] text-center'>Join pro pack get Access of all courses</p>
        <h1 className='self-center font-bold'>$200 only</h1>
        <button className='bg-yellow-500 rounded-lg p-2 mx-5 text-md font-semibold  hover:bg-yellow-400'>Buy Now</button>

        <div className='bg-gray-500 p-2 text-white'>
            <h3 className='text-md font-semibold'>100% refund at Cencelation</h3>
            <p className='text-[12px]'>*term and condition applies</p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
