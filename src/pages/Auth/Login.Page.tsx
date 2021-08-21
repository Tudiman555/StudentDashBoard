/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Input from "../../components/Input/Input";
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineExclamationCircle, HiOutlineX} from "react-icons/hi";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ToggleButton from "../../components/ToggleButton";
import CheckedBox from "../../components/CheckedBox";
import { useFormik } from "formik";
import * as yupp from "yup";
import { meErrorAction, meLoginAction } from "../../actions/auth";
import { store, useAppSelector } from "../../Store";
import { meErrorSelector } from "../../selectors/auth.selectors";
import { Dialog } from "@headlessui/react";

interface Props {
}

const LoginPage: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const { 
    handleBlur,
    handleChange,
    handleSubmit,
    setSubmitting,
    isValid,
    touched,
    values,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: { email: "", password: "" },
    initialErrors : {email : "This Field is Required", password : "This Field is Required"},
    validationSchema: yupp.object().shape({
      email: yupp.string().required().email(),
      password: yupp.string().required().min(8),
    }),

    onSubmit: (data) => {
        store.dispatch(meLoginAction(data));
    },
  });
  
     const goToSignUp = () => {
       history.push("/signUp")
     }
  const error = useAppSelector(meErrorSelector);
  console.log(error)
  
  const closeDialog = () => {
    store.dispatch(meErrorAction(undefined))
    setSubmitting(false)
  }

  return (
    <>
      
      <div className="relative w-full tracking-wider lg:w-1/2 font-primary">
      {error &&
      <div>
        <Dialog open={true} className="fixed inset-0 z-10 flex items-center justify-center" onClose={closeDialog}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-75"/>
          
          <div className="absolute flex flex-col items-center justify-center w-1/2 bg-white rounded-md h-1/5">
            <button onClick={closeDialog}><HiOutlineX className="absolute w-5 h-5 text-red-800 top-2 right-2 hover:bg-red-400 "></HiOutlineX></button>
            <HiOutlineExclamationCircle className="w-5 h-5 text-red-800 sm:w-10 sm:h-10"></HiOutlineExclamationCircle>
            <Dialog.Title className="text-lg font-bold tracking-wider text-center text-red-800 sm:text-2xl">Error</Dialog.Title>
          
          <Dialog.Description className="text-sm text-red-800 sm:text-base">
        {error}
      </Dialog.Description>
          </div>
      
        </Dialog></div> }
        <div className="flex flex-col justify-center h-screen mx-auto max-w-480p px-x py-y">
          <h1 className="pb-2 text-4xl">
            Log In to{" "}
            <button className="font-semibold text-indigo-600">
              CODE YOGI
            </button>
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
                disabled={!isValid || isSubmitting}
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

LoginPage.defaultProps = {};
export default LoginPage;

