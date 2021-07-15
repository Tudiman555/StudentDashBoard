import React, { memo } from "react";

interface Props {
  title: string;
  type : "submit" | "button" ;
}

const button: React.FC<Props> = (props) => {
  return (
    <>
      <button
      type={props.type} 
      className="px-5 py-2 font-medium text-white bg-indigo-600 border rounded-lg">
        {props.title}
      </button>
    </>
  );
};

button.defaultProps = {};
export default memo(button);
