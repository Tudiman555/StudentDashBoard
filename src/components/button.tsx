import React, { memo } from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  type : "submit" | "button" ;
  buttonDisabled : boolean;
}

const Button: React.FC<Props> = ({buttonDisabled,title,type,...rest}) => {
  const disableTheme = buttonDisabled ? "cursor-not-allowed opacity-80" : "";
  return (
    <>
      <button
      {...rest}
      type={type}
      disabled = {buttonDisabled} 
      className={"px-5 py-2 font-medium text-white bg-indigo-600 border rounded-lg hover:opacity-80 " + disableTheme}>
        {title}
      </button>
    </>
  );
};

Button.defaultProps = {};
export default memo(Button);
