import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../api/auth";
import { useAppSelector } from "../Store";

import Button from "./Button/Button";

interface Props {}

const SideBar: React.FC<Props> = (props) => {
  const user = useAppSelector((state)=> state.users.byId[state.auth.id!]);
  return (
    <>
      <div className="w-2/12 h-screen ">
        <div className="flex flex-col items-center h-full text-white bg-gray-300 border-r border-gray-400 rounded-sm">
          <div className="text-center text-red-600">{user!.first_name}</div>
          <div className="space-y-2">
          <Link to="/dashboard" className="flex items-center justify-center w-full h-10 text-gray-600 transition-colors duration-500 border-gray-400 rounded-md hover:bg-gray-400 ">
          <span className="tracking-widest">DashBoard</span>
        </Link>
        <Link to="/recordings" className="flex items-center justify-center w-full h-10 text-gray-600 transition-colors duration-500 border-gray-400 rounded-md hover:bg-gray-400 ">
          <span className="tracking-widest">Recordings</span>
        </Link><Link to="/groups" className="flex items-center justify-center w-full h-10 text-gray-600 transition-colors duration-500 border-gray-400 rounded-md hover:bg-gray-400 ">
          <span className="tracking-widest">Groups</span>
        </Link>
        <Link to="/people" className="flex items-center justify-center w-full h-10 text-gray-600 transition-colors duration-500 border-gray-400 rounded-md hover:bg-gray-400 ">
          <span className="tracking-widest">Users</span>
        </Link>
        </div>
          </div>
        
        <Button
          title="Log out"
          onClick={() => {
            Logout()
            window.location.href = "/login"
          }}
        ></Button>
      </div>
    </>
  );
};

SideBar.defaultProps = {};
export default SideBar;
