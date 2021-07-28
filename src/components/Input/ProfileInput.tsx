import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error? : string
    touched? : boolean
}

const ProfileInput : React.FC<Props> = ({error,touched,...rest}) => {
  return (
     <>
      <div className="w-full">
       <label htmlFor={rest.id} className="block mb-2 text-sm tracking-wider text-gray-500">{rest.placeholder}</label>
       <input {...rest}  className={" block w-full p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none "+ (error && touched? "border-red-600 focus:border-red-600 mb-2":"mb-6 focus:border-indigo-600 ") }/>
       {touched && <div className="pl-6 text-xs text-red-600">{error}</div>}
       </div> 
     </>
  );
};

ProfileInput.defaultProps = {
}
export default ProfileInput;
