import React, { InputHTMLAttributes } from "react";
import Input from "../components/input";
import { HiOutlineUser, HiOutlineLockClosed,HiOutlineAtSymbol } from "react-icons/hi";
import Button from "../components/button";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ToggleButton from "../components/toggleButton";
import CheckedBox from "../components/checkedBox";
import { useFormik } from "formik";
import * as yupp from "yup";

interface Props {}

const SignUp: React.FC<Props> = (props) => {
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
    initialValues: { username:"",email: "", password: "" },
    validationSchema: yupp.object().shape({
      username: yupp.string().required().min(6),
      email: yupp.string().required().email(),
      password: yupp.string().required().min(8),
    }),

    onSubmit: (data) => {
      setTimeout(() => {
        console.log("data Submitted", data);
        history.push("/dashboard");
      }, 5000);
    },
  });

  const goToLogin = () => {
    history.push("/login");
  };

  let isButtonDiabled: boolean = true;

  if (!(errors.email || errors.password))
  {
    isButtonDiabled = false;
  }

  return (
    <>
      <div className="w-full tracking-wider lg:w-1/2 font-primary">
        <div className="flex flex-col justify-center h-screen mx-auto max-w-480p px-x py-y">
          <h1 className="pb-2 text-4xl">Get started with a free account</h1>
          <p className="mb-12 text-sm font-semibold">
          Already have an account?{" "}
            <a
              className="text-indigo-600 border-b border-indigo-600 pb-0.5 cursor-pointer"
              onClick={goToLogin}
            >
              Log in
            </a>
          </p>
          <form onSubmit={handleSubmit}>
          <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="username"
              required
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              onBlur={handleBlur}
              touched={touched.username}
            >
              <HiOutlineUser className="w-6 h-6 text-indigo-600" />
            </Input>
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
              <HiOutlineAtSymbol className="w-6 h-6 text-indigo-600" />
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
            <div className="mb-5">
              <CheckedBox labelTitle="I agree to the"><a href="#" className="text-indigo-600"> terms and condition</a></CheckedBox>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <ToggleButton
                labelName="Show Password"
                enabled={showPassword}
                setEnabled={setShowPassword}
                type="button"
              ></ToggleButton>
              <Button
                title="Get Started!"
                type="submit"
                buttonDisabled={isButtonDiabled}
              ></Button>
              {isSubmitting && <FaSpinner className="animate-spin"></FaSpinner>}
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

SignUp.defaultProps = {};
export default SignUp;
