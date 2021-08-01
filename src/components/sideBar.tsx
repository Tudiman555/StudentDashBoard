import React from "react";
import { useHistory } from "react-router-dom";
import { Logout } from "../api/auth";
import { user } from "../pages/AppContext";

import Button from "./Button/Button";

interface Props {}

const SideBar: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="w-2/12 h-screen">
        <div className="h-screen text-white bg-black">Side Bar</div>
        <div className="text-red-600">{user.first_name}</div>
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
