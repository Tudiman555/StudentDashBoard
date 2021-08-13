import React from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   error? : string
   touched? : boolean
}

const Input: React.FC<Props> = ({error,touched,children,...rest}) => {

  return (
    <>
      <div className="pt-11p pb-25p">
         <div className="flex">
        <label htmlFor={rest.id} className="sr-only">
           {rest.name}
        </label>
        {children}
        <input
          {...rest}
          className={"w-full pb-2 pl-6 border-b outline-none " + (error && touched? "border-red-600":"")}
        />
        </div>
        {touched && <div className="pl-6 text-xs text-red-600">{error}</div>}
      </div>
      
    </>
  );
};

Input.defaultProps = {
};
export default Input;
