import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { LoadUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
 
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  async function submitHandler(e) {
   try {
     e.preventDefault();
  await dispatch(changePassword(oldPassword, newPassword));
    dispatch(LoadUser());

    setOldPassword("");
    setNewPassword("");
   } catch (error) {
    console.log(error)
   }
  }

  const { loading, message, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <div className="w-full h-[80vh] sm:h-[90vh] flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        action=""
        className="bg-white w-[400px] shadow-sm p-10 flex flex-col gap-5 "
      >
        <h1 className="text-center text-lg font-semibold">Change Password</h1>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="p-2 bg-gray-200 outline-none text-sm"
          placeholder="Old password"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-2 bg-gray-200  outline-none text-sm"
          placeholder="New password"
        />
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
      </form>
    </div>
  );
};

export default ChangePassword;
