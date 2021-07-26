import React from "react";
import { useHistory } from "react-router-dom";
import { Logout } from "../api";
import Button from "../components/Button/button";

interface Props {}

const SideBar: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <>
      <div>
        <div className="w-40 h-screen text-white bg-black">Side Bar</div>
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
