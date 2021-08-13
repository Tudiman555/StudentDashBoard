import React from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
}

const Lecture : React.FC<Props> = (props) => {
   const {lectureNumber , batchNumber} = useParams<any>();
  return (
     <>
        <div>These are the details of Batch #{lectureNumber} Lecture #{batchNumber} .
        <Link to="/dashboard" className="text-blue-700 hover:underline">
             <span>Back To Dashboard</span> 
        </Link>
        </div>
     </>
  );
};

Lecture.defaultProps = {
}
export default Lecture;
