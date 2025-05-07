import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PlaylistContainer = ({ playlist, _id }) => {

  function removeHandler()
  {
console.log("remove playlist")
  }
  
  return (
    <div className="flex gap-10 flex-wrap p-2 overflow-auto justify-center md:justify-start">
      {playlist.map((Element, index) => {
       return <div key={_id} className="w-50 md:w-30 bg-white shadow-sm p-1">
          <h1 className="text-[12px] font-medium">{Element.course}</h1>
          <img src={Element.poster} alt="" />
          <div className="flex justify-between items-center p-1">
            <Link to={`/course/:${_id}`}>
              <button className="text-[12px] cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-sm ">
                Watch Now
              </button>
            </Link>
            <RiDeleteBin7Fill onClick={removeHandler} className="cursor-pointer"/>
          </div>
        </div>;
      })}
    </div>
  );
};

export default PlaylistContainer;
