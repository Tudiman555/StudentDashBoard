import React from "react";

interface Props {
   labelTitle:string;
}

const checkedBox : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex items-center">
    
        <input type="checkbox" id="check" className="w-4 h-4 border-2 border-indigo-600 cursor-pointer"/>
        <label htmlFor="check" className="pl-4 text-sm text-gray-400 cursor-pointer">{props.labelTitle}{props.children}</label>
        </div>
     </>
  );
};

checkedBox.defaultProps = {
}
export default checkedBox;
