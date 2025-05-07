import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaMoon,
  FaSignOutAlt,
  FaSun,
  FaTachometerAlt,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, SetIsdark] = useState(false);
  const [barisOpen, setbarIsOpne] = useState(false);
  const isAuthanticated = true;
  const role = "admin";
  function barHandler()
  {
    setbarIsOpne(!barisOpen)
  }
  return (
    <div className="flex w-full px-4 py-2  shadow-sm justify-between items-center fixed text-white bg-white z-10 ">
      <div onClick={barHandler} className="bg-yellow-500 rounded-full p-2">
        <FaBars className="text-sm" />
      </div>
      <div className={`${barisOpen?"translate-x-0":"-translate-x-full"} transform transition-transform duration-300 ease-in-out  h-screen  flex flex-col justify-between  z-10 top-0 left-0 w-60 bg-gray-500 absolute `}>
        <div>
          <div  onClick={barHandler} className="flex justify-end text-xl hover:text-red-500 p-1 absolute right-1 top-1"><FaTimes/></div>
          <h1 className="border-b-1 p-5 text-xl  text-center">Cousre Builder</h1>
          <div className="flex flex-col gap-6 text-lg md:text-sm  md:gap-3 pl-13 p-5">
            <Link onClick={barHandler} className="hover:text-yellow-500" to={"/"}>
              Home
            </Link>
            <Link onClick={barHandler} to={"/courses"}>Browse all Home</Link>
            <Link onClick={barHandler} to={"/requestcourse"}>Request to a course</Link>
            <Link onClick={barHandler} to={"/contact"}>Contact Us</Link>
            <Link onClick={barHandler} to={"/about"}>About</Link>
          </div>
        </div>

        <div>
          {isAuthanticated ? (
            <div className="flex flex-col justify-center gap-1 items-center mb-5">
              <Link onClick={barHandler} to={"/login"}>
                <button className="bg-yellow-500 text-sm rounded-lg w-[200px] p-2 text-center">Login</button>
              </Link>
              <p>OR</p>
              <Link onClick={barHandler} to={"/signup"}>
                <button className="bg-yellow-500 text-sm rounded-lg p-2 w-[200px] text-center">Register</button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center gap-5 items-center mb-5">
              <Link onClick={barHandler} to={"/profile"}>
                <button>profile</button>
              </Link>
              <Link onClick={barHandler} to={"/login"}>
                <button className="flex gap-1 items-center justify-center">
                  <FaSignOutAlt className="text-sm" />
                  logout
                </button>
              </Link>
            </div>
          )}
          {role === "admin" ? (
            <div className="flex gap-1 items-center justify-center p-2 bg-yellow-500">
              <FaTachometerAlt />
              <p>Dashboard</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div onClick={() => SetIsdark(!isDark)}>
        {isDark ? (
          <FaSun className="text-xl text-gray-800" />
        ) : (
          <FaMoon className="text-xl text-gray-800" />
        )}{" "}
      </div>
    </div>
  );
};

export default Header;
