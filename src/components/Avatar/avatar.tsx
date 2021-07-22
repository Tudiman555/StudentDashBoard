import React from "react";
import { FaUnderline } from "react-icons/fa";
import Tushar from "../../images/Tushar.jpg"

interface Props {
    imageUrl : string | undefined
    onlineStatus? : boolean
    size : "Default" | "Small" | "Large"
    shape? : "Sqaure" | "Rounded"
}

const avatar : React.FC<Props> = ({onlineStatus,imageUrl,size,shape}) => {

    const sizes = {
        Default : "w-20 h-20",
        Small : "w-16 h-16",
        Large : "w-24 h-24",
    }

    const displayStatus = (onlineStatus !== undefined) ? true : false;
    const status = onlineStatus === true? "bg-green-600": "bg-gray-400";
    const shaped = (shape === "Sqaure"? "rounded-lg" : "rounded-full")
  return (
     <>
        <div className={ shaped +" relative transition-transform transform border-4 border-white hover:-translate-y-2 " + sizes[size]}>
        <img src={imageUrl} alt="" className={"object-cover object-top w-full h-full " + shaped}/>
        {(displayStatus) && <div className={"absolute bottom-0 right-0 border-4 border-white rounded-full h-1/4 w-1/4 " +" " + status}></div>}
        </div>
     </>
  );
};

avatar.defaultProps = {
    onlineStatus : undefined,
    imageUrl : "https://pbs.twimg.com/profile_images/1060274716043345923/jVSWVi9g_400x400.jpg",
    size : "Default",
    shape : "Rounded"
}
export default avatar;
