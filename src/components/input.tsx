import React from "react";
import { useState } from "react";

interface Props {
  name: string;
  type: "password" | "email" ;
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
   
   const [field, setField] = useState("");
   const [touched, setTouched] = useState(false);
   
   const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setField(event.target.value);
   }

   const handleBlur = (event : React.FocusEvent<HTMLInputElement>) => {
      setTouched(true);
   }

   let error = "";

   if(props.type == "password") {
      if(!field) {
         error= props.name + " is required";
      }
      else if(field.length < 8) {
         error = "Please Enter a Valid " + props.name;
      }
   }
   else if(props.type == "email") {
      if(!field) {
         error= props.name + " is required";
      }
      else if(!field.endsWith("@gmail.com")) {
         error = "Please Enter a Valid " + props.name;
      }
   }

  return (
    <>
      <div className="pt-11p pb-25p">
         <div className="flex">
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
          onBlur={handleBlur}
        />
        </div>
        {touched && <div className="text-xs text-white bg-red-500">{error}</div>}
      </div>
      
    </>
  );
};

Input.defaultProps = {};
export default Input;
