import React from "react";
import { HiOutlineX } from "react-icons/hi";


interface Props {
    theme? : "Primary" | "Warning" | "Dark",
    title : string,
}

const alert : React.FC<Props> = ({theme,title}) => {
    const colors = {
        Primary: "indigo",
        Warning: "yellow",
        Dark: "gray",
      };
    const classTheme = colors[theme!];
  return (
     <>
        <div className={"flex items-center justify-between w-full p-4 rounded-md " + "bg-" + classTheme + "-50 " + "text-" + classTheme + "-600 "}>
            <div><h1><strong>{theme + "! "}</strong>
            {title}</h1></div>
            <button><HiOutlineX /></button>
        </div>
     </>
  );
};

alert.defaultProps = {
    title:"Lorem Ipsum is simply dummy text of the printing.",
    theme : "Primary"
}
export default alert;
