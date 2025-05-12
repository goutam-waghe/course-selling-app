import React from "react";
import { FaAddressBook, FaCouch, FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center sm:items-start border-1 border-gray-300  gap-2 shadow-sm pt-12 pl-10">
      <div>
      
      <LinkBtn
        icon={<FaUserAlt />}
        text={"Dashboard"}
        url={"dashboard"}
        location={location.pathname === "/admin/dashboard"}
      />
      <LinkBtn
        icon={<FaAddressBook />}
        text={"create course"}
        url={"createcourse"}
        location={location.pathname === "/admin/createcourse"}
      />
      <LinkBtn
        icon={<FaCouch />}
        text={"Course"}
        url={"courses"}
        location={location.pathname === "/admin/courses"}
      />
      <LinkBtn
        icon={<FaUserAlt />}
        text={"User"}
        url={"users"}
        location={location.pathname === "/admin/users"}
      />
        
      </div>
    </div>
  );
};

function LinkBtn({ text, url, location, icon }) {
  return (
    <Link to={`/admin/${url}`} className={``}>
      <button
        className={`p-2 flex items-center gap-2 ${
          location ? "text-purple-500" : ""
        }`}
      >
        {icon} {text}
      </button>
    </Link>
  );
}

export default Sidebar;
