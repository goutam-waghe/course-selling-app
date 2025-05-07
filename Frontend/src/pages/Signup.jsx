import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, SetImagePrev] = useState("");
  function signupBtnHandler(e) {
    e.preventDefault();

    setEmail("");
    setPassword("");
    setUsername("")
    SetImagePrev("")
  }

  function FileHandler(e)
  {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      SetImagePrev(reader.result)
    }
  }
 
  return (
    <div
      onSubmit={(e) => signupBtnHandler(e)}
      className="w-full h-[80vh] sm:h-[90vh] flex justify-center items-center"
    >
      <form
        className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-4 lg:text-sm lg:gap-3 justify-center shadow-lg rounded-sm p-10"
        action=""
      >
        <div className="flex justify-center"> 
        <img src={imagePrev} alt="User Avatar"
     class="w-15 h-15 rounded-full border-1 object-cover" />
        </div>
        
        <h1 className="text-center text-lg font-medium">Register</h1>
        <div className=" flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className=" bg-gray-200 p-2 outline-none  rounded-sm"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="name"
            placeholder="Enter your Name"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className=" bg-gray-200 p-2 outline-none  rounded-sm"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="bg-gray-200 p-2 outline-none  rounded-sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password "
            id="password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="avtar">Choose Avtar</label>
          <input
            className="file bg-gray-200 p-2 outline-none rounded-sm"
            required
            accept="image/"
            type={"file"}
            id="avtar"
            onChange={(e) =>FileHandler(e)}
          />
        </div>
        
        <button type="submit" className="bg-yellow-500 p-2 text-white font-medium hover:bg-yellow-400">
          Submit
        </button>
        <button className="text-sm">
          {" "}
          Already have an Account ? <Link to={"/login"}>login</Link>
        </button>
      </form>
    </div>
  );
};

export default Signup;
