import React from "react";
import { FaUnderline } from "react-icons/fa";
import Tushar from "../../images/Tushar.jpg"

interface Props {
    image : string | undefined
    onlineStatus? : boolean
}

const avatar : React.FC<Props> = ({onlineStatus,image}) => {
    const displayStatus = (onlineStatus !== undefined) ? true : false;
    const status = onlineStatus === true? "bg-green-600": "bg-gray-400";
    
  return (
     <>
        <div className="relative w-24 h-24 transition-transform transform border-4 border-white rounded-full hover:-translate-y-2">
        <img src={image} alt="" className="object-cover object-top w-full h-full rounded-full"/>
        {(displayStatus) && <div className={"absolute bottom-0 right-0 border-4 border-white rounded-full h-7 w-7" +" " + status}></div>}
        </div>
     </>
  );
};

avatar.defaultProps = {
    onlineStatus : undefined,
    image : Tushar
}
export default avatar;
