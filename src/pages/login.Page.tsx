import React, { InputHTMLAttributes } from "react";
import Input from "../components/input";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";
import Button from "../components/button";
import { useState } from "react";
import {FaSpinner} from "react-icons/fa"
import {useHistory} from "react-router-dom";
import ToggleButton from "../components/toggleButton"

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedData = event.target.name;
    setData({ ...data, [changedData]: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const blurredElement = event.target.name;
    setTouched({...touched,[blurredElement]:true});
  };

  let error = { email: "", password: "" };

  if (!data.email) {
    error.email = "This Field is Required";
  } else if (!data.email.endsWith("@gmail.com")) {
    error.email = "Enter a valid email";
  }

  if (!data.password) {
    error.password = "This Field is Required";
  } else if (data.password.length < 8) {
    error.password = "Minimum 8 characters are required for password";
  }

  let isButtonDiabled : boolean = true;
  
  
  if(!(error.email || error.password)) {
    isButtonDiabled = false;
  }


  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col justify-center h-screen mx-auto max-w-480p px-x py-y">
          <h1 className="pb-2 text-4xl">Log In to <a className="font-semibold text-indigo-600" href="#">CODE YOGI</a></h1>
          <p className="mb-12 text-sm font-semibold">New Here? <a className="text-indigo-600 border-b border-indigo-600 pb-0.5" href="#">Create an account</a></p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            
              if(error.email || error.password) {
                
                console.log("Form Submission Rejected");
                return;
              }
              
              setSubmitting(true);
              setTimeout(()=>{
                console.log("login successfull");
                history.push("/dashboard");
              },5000)
              
            }}
          >
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={data.email}
              onChange={handleChange}
              error={error.email}
              onBlur={handleBlur}
              touched={touched.email}
            >
              <HiOutlineUser className="w-6 h-6" />
            </Input>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={data.password}
              onChange={handleChange}
              error={error.password}
              onBlur={handleBlur}
              touched={touched.password}
            >
              <HiOutlineLockClosed className="w-6 h-6" />
            </Input>
            <div className="flex items-center justify-between">
            <ToggleButton labelName="Show Password" enabled={showPassword} setEnabled={setShowPassword}></ToggleButton>
            <Button title="Sign in" type="submit" buttonDisabled = {isButtonDiabled}></Button>
            {submitting && <FaSpinner className="animate-spin"></FaSpinner>}
            
            </div>
            
          </form>
          
        </div>
      </div>
    </>
  );
};

Login.defaultProps = {};
export default Login;
