import React from "react";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import Input from "./input";
import Button from "./button";

interface Props {
    action? : string;
}

const form : React.FC<Props> = (props) => {
  return (
     <>
         <form
            action={props.action}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            {props.children}
          </form>
     </>
  );
};

form.defaultProps = {
}
export default form;
