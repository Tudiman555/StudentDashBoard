import React from "react";
import { Link } from "react-router-dom";

interface Props {
}

const signup : React.FC<Props> = (props) => {
  return (
     <>
        <div>This is Sign Up Page.
        Already Have an account? 
        <Link to="/login" className="text-blue-700 hover:underline">
             <span> Click here to Login in</span> 
        </Link>
        </div>
     </>
  );
};

signup.defaultProps = {
}
export default signup;
