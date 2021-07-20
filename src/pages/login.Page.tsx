import React from "react";
import Input from "../components/input";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";
import Button from "../components/Button/button";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ToggleButton from "../components/toggleButton";
import CheckedBox from "../components/checkedBox";
import { useFormik } from "formik";
import * as yupp from "yup";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yupp.object().shape({
      email: yupp.string().required().email(),
      password: yupp.string().required().min(8),
    }),

    onSubmit: (data) => {
      setTimeout(()=> {
        console.log("data Submitted", data)
        history.push("/dashboard")
      },5000)
    },
  });
  
     const goToSignUp = () => {
       history.push("/signUp")
     }

  let isButtonDiabled: boolean = true;

  console.log(errors.email);
  console.log(errors.password);
  
  if (!(errors.email || errors.password)) {
    isButtonDiabled = false;
  }

  return (
    <>
      <div className="w-full tracking-wider lg:w-1/2 font-primary">
        <div className="flex flex-col justify-center h-screen mx-auto max-w-480p px-x py-y">
          <h1 className="pb-2 text-4xl">
            Log In to{" "}
            <a className="font-semibold text-indigo-600" href="#">
              CODE YOGI
            </a>
          </h1>
          <p className="mb-12 text-sm font-semibold">
            New Here?{" "}
            <a
              className="text-indigo-600 border-b border-indigo-600 pb-0.5 cursor-pointer"
              onClick={goToSignUp}
            >
              Create an account
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              onBlur={handleBlur}
              touched={touched.email}
            >
              <HiOutlineUser className="w-6 h-6 text-indigo-600" />
            </Input>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              onBlur={handleBlur}
              touched={touched.password}
            >
              <HiOutlineLockClosed className="w-6 h-6 text-indigo-600" />
            </Input>
            <div className="flex-wrap items-center justify-between space-y-3 sm:flex">
              <ToggleButton
                labelName="Show Password"
                enabled={showPassword}
                setEnabled={setShowPassword}
                type="button"
              ></ToggleButton>
              <Button 
                title="Log in"
                type="submit"
                buttonDisabled={isButtonDiabled}
                theme ="Primary"
              ></Button>
              {isSubmitting && <FaSpinner className="animate-spin"></FaSpinner>}
            </div>
            <div className="flex flex-col items-center mt-16">
              <CheckedBox labelTitle="Keep me logged in"></CheckedBox>
              <div className="mt-6 font-semibold tracking-widest text-indigo-600">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </form>
          <p className="mt-24 text-sm">
            © 2020 All Rights Reserved. CORK is a product of Designreset. Cookie
            Preferences, Privacy, and Terms.
          </p>
        </div>
      </div>
    </>
  );
};

Login.defaultProps = {};
export default Login;
function yup() {
  throw new Error("Function not implemented.");
}
