import React from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Recordings : React.FC<Props> = (props) => {
  return (
     <>
        <div>This Recordings Page.
        <Link to="/dashboard" className="text-blue-700 hover:underline">
             <span>Back To Dashboard</span> 
        </Link>
        </div>
     </>
  );
};

Recordings.defaultProps = {
}
export default Recordings;
