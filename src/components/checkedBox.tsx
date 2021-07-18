import React from "react";

interface Props {
}

const checkedBox : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex items-center">
    
        <input type="checkbox" id="check" className="w-4 h-4 border-2 border-indigo-600 cursor-pointer"/>
        <label htmlFor="check" className="pl-4 text-sm text-gray-400 cursor-pointer">Keep me Logged in</label>
        </div>
     </>
  );
};

checkedBox.defaultProps = {
}
export default checkedBox;
