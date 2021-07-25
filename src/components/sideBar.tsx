import React from "react";
import Button from "../components/Button/button"

interface Props {
}

const SideBar : React.FC<Props> = (props) => {
  return (
     <>
       <div >
        <div className="w-40 h-screen text-white bg-black">Side Bar</div>
        <Button title="Log out"></Button>
      </div>
     </>

  );
};

SideBar.defaultProps = {
}
export default SideBar;
