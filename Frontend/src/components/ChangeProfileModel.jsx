import React, { useState } from 'react'
import avtar from "../assets/images/avtar.png";


const ChangeProfileModel = ({setChangeProfileModelOpen , SetImagePrev}) => {
   const [image , setimage] = useState("");
   
  function FileHandler(e)
  {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(reader.result)
    }
  }
 
    function submithandler(e)
    {
      e.preventDefault();
    
      SetImagePrev(image)
      setChangeProfileModelOpen(false)
      setimage("")

      
      
    }
   function closeHandler()
    {
      setChangeProfileModelOpen(false)
setimage("")
    }
  return (
    
    <div className='transition-all delay-300 ease-in-out absolute z-50 bg-white flex justify-center items-center p-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

       <form onSubmit={submithandler} action="" className='p-2 flex flex-col gap-5'>
       <div className="flex flex-col items-center gap-1">
         <img className="w-20 h-20 rounded-full object-cover" src={image? image :avtar} alt="" />
          <label htmlFor="avtar">Choose Avtar</label>
          <input
            className="file bg-gray-200 p-1 outline-none rounded-sm"
            required
            accept="image/"
            type={"file"}
            id="avtar"
            onChange={(e) =>FileHandler(e)}
          />
        </div>
      
        <div className='flex flex-col gap-2'>
          <button type="submit" className='rounded cursor-pointer  text-white bg-yellow-500 text-sm hover:bg-yellow-400 px-2 py-2'>change</button>
          <button onClick={closeHandler} className='text-yellow-500 cursor-pointer text-sm'>cencel</button>
        </div>
       </form>
    </div>
  )
}

export default ChangeProfileModel
