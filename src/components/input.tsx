import React from "react";
import { useState } from "react";

interface Props {
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
   
   const [field, setField] = useState("");
   
   const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setField(event.target.value);
   }
   console.log("Rerendering");

  return (
    <>
      <div className="flex pt-11p pb-25p">
        <label htmlFor={props.name} className="sr-only">
          {props.name}
        </label>
        {props.children}
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          id={props.name}
          autoComplete ={props.name}
          value={field}
          onChange = {handleChange}
          className="w-full pb-2 pl-6 border-b outline-none"
        />
      </div>
    </>
  );
};

Input.defaultProps = {};
export default Input;
