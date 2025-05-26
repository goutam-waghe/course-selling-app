import React, { useState } from "react";
import avtar from "../assets/images/avtar.png";
import { Link, Links } from "react-router-dom";
import PlaylistContainer from "../components/PlaylistContainer";
import ChangeProfileModel from "../components/ChangeProfileModel";

const UserProfile = ({ user }) => {
  const [changeProfileModelOpen, setChangeProfileModelOpen] = useState(false);

  const [imagePrev, SetImagePrev] = useState("");
  const changeProfileHandler = () => {
    setChangeProfileModelOpen(true);
  };
  return (
    <>
      <div>
        {changeProfileModelOpen && (
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        )}

        <div
          className={`${
            changeProfileModelOpen ? "blur-[1px]  " : ""
          } flex justify-center h-[80vh] md:h-[90vh] overflow-auto`}
        >
          <div className="flex flex-col w-full p-4 lg:w-1/2 md:w-2/3 min-h-[90vh] pt-10 ">
            <h1 className="text-2xl font-semibold py-2">Profile</h1>
            <div className="flex flex-col sm:flex-row items-center gap-10 md:items-start  border-b-2 pb-5">
              <div className="flex flex-col items-center">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={user.avatar.url}
                  alt=""
                />
                <p
                  onClick={changeProfileHandler}
                  className="text-[12px] cursor-pointer text-yellow-400"
                >
                  Change prifile
                </p>
              </div>
              <div className="text-sm flex flex-col   gap-5">
                <div className="">
                  <p className="flex ">
                    <span className="font-medium w-[100px]  sm:w-[120px] ">
                      Name
                    </span>
                    <span>{user.name}</span>
                  </p>
                  <p className="flex ">
                    <span className="font-medium  w-[100px]  sm:w-[120px]  ">
                      Email
                    </span>
                    <span>{user.email}</span>
                  </p>
                  <p className="flex">
                    <span className="font-medium  w-[100px]  sm:w-[120px]  ">
                      CreatedAt
                    </span>{" "}
                    <span>
                      <DateDisplay isoString={user.createdAt.toString()} />
                    </span>
                  </p>
                  {user.subscription !== "active" ? (
                    <div className="flex">
                      <span className="font-medium w-[100px]  sm:w-[120px]  ">
                        Subscription
                      </span>{" "}
                      <span>Cencel Susbcription</span>
                    </div>
                  ) : (
                    <p className="flex items-center">
                      <span className="font-medium w-[120px] ">
                        Subscription
                      </span>
                      <Link to={"/subscribe"}>
                        <button className="rounded-sm  cursor-pointer text-[12px] bg-yellow-500 px-2 py-1">
                          Subscribe
                        </button>
                      </Link>
                    </p>
                  )}
                </div>
                <div className="flex gap-3 text-sm">
                  <Link to={"/updateProfile"}>
                    <button className="px-2 py-1 cursor-pointer bg-gray-300 text-[12px] rounded-sm">
                      Update profile
                    </button>
                  </Link>
                  <Link to={"/changepassword"}>
                    <button className="px-2 py-1 cursor-pointer bg-gray-300 text-[12px] rounded-sm">
                      Change Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-lg font-semibold mt-5">Playlist</h1>
            <div>
              {user.playlist.length > 0 && (
                <PlaylistContainer _id={user._id} playlist={user.playlist} />
              )}
            </div>
          </div>
        </div>

        {changeProfileModelOpen ? (
          <ChangeProfileModel
            SetImagePrev={SetImagePrev}
            setChangeProfileModelOpen={setChangeProfileModelOpen}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UserProfile;

export const DateDisplay = ({ isoString }) => {
  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <p>{formattedDate}</p>;
};
