import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";
import Button from "../components/button";
import Form from "../components/form";

interface Props {}

const login: React.FC<Props> = (props) => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col justify-center h-screen mx-auto max-w-480p px-x py-y">
          <h1 className="pb-2 text-4xl">Log In to CODE YOGI</h1>
          <p className="mb-12 text-sm">New Here? Create an account</p>
          <Form>
            <Input type="email" name="email" placeholder="Email">
              <HiOutlineUser className="w-6 h-6" />
            </Input>
            <Input type="password" name="password" placeholder="Password">
              <HiOutlineLockClosed className="w-6 h-6" />
            </Input>
            <Button title="Log in" type="submit"></Button>
         </Form>
        </div>
      </div>
    </>
  );
};

login.defaultProps = {};
export default login;
