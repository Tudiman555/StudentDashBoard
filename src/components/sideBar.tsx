import React from "react";

interface Props {
}

const SideBar : React.FC<Props> = (props) => {
  return (
     <>
        <div className="w-40 h-screen text-white bg-black">Side Bar</div>
     </>
  );
};

SideBar.defaultProps = {
}
export default SideBar;
