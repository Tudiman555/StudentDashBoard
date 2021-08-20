import React, { memo } from "react";
import { Link } from "react-router-dom";

interface Props {
    children? : string;
    title : string;
    directTo : string;
    disabled : boolean;
}

const LinkButton : React.FC<Props> = (props) => {
   console.log("Running")
  return (
     <>
        <Link to={props.directTo} className={" bg-green-500 py-2 px-4 rounded-lg text-white font-bold text-center "+(props.disabled ? "cursor-not-allowed" : "")}>{props.children}</Link>
     </>
  );
};

LinkButton.defaultProps = {
}
export default memo(LinkButton);
