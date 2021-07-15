import React from "react";
import { Link } from "react-router-dom";

interface Props {
}

const login : React.FC<Props> = (props) => {
  return (
     <>
        <div className="w-full lg:w-1/2">This is Login Page.
        Don't have an account? 
        <Link to="/signUp" className="text-blue-700 hover:underline">
             <span> Click here to Login in</span> 
        </Link>
        </div>
     </>
  );
};

login.defaultProps = {
}
export default login;
