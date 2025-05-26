import React, { useEffect, useState } from "react";
import avtar from "../assets/images/avtar.png";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "../redux/actions/profileActions";
import { LoadUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ChangeProfileModel = ({ setChangeProfileModelOpen, SetImagePrev }) => {
  const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  
  function FileHandler(e) {
     const selectedFile = e.target.files[0];
  if (selectedFile) {
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setimage(reader.result); // only for preview
    };
  }
  }

  async function submithandler(e) {
    try {
      e.preventDefault();
    SetImagePrev(image);
    const formData = new FormData();
   
    formData.append("file", file);
    await dispatch(updateProfilePicture(formData));
    dispatch(LoadUser())
    setChangeProfileModelOpen(false);
 
    setimage("");
    } catch (error) {
      console.log(error)
    }
  }
  function closeHandler() {
    setChangeProfileModelOpen(false);

    setimage("");
  }
  return (
    <div className="transition-all delay-300 ease-in-out absolute z-50 bg-white flex justify-center items-center p-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <form
        onSubmit={submithandler}
        className="p-2 flex flex-col gap-5"
      >
        <div className="flex flex-col items-center gap-1">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={image ? image : avtar}
            alt=""
          />
          <label htmlFor="avtar">Choose Avtar</label>
          <input
            className="file bg-gray-200 p-1 outline-none rounded-sm"
            required
            accept="image/*"
            type={"file"}
            id="avtar"
            onChange={(e) => FileHandler(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
         <button
  type="submit"
  disabled={loading}
  className={`rounded cursor-pointer text-white bg-yellow-500 text-sm px-2 py-2 ${
    loading ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-400"
  }`}
>
  {loading ? (
    <div className="flex items-center gap-1">
      <svg
        className="animate-spin h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
        />
      </svg>
      Uploading...
    </div>
  ) : (
    "Change"
  )}
</button>
          <button
            onClick={closeHandler}
            className="text-yellow-500 cursor-pointer text-sm"
          >
            cencel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeProfileModel;
