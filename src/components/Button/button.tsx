import React, { memo } from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "solid" | "outlined";
  title: string;
  type?: "submit" | "button";
  buttonDisabled?: boolean;
}

const Button: React.FC<Props> = ({
  theme,
  buttonDisabled,
  title,
  type,
  ...rest
}) => {
  const disableTheme = buttonDisabled
    ? "cursor-not-allowed shadow-none opacity-80 "
    : "";
  const classTheme = theme === "outlined" ? "bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white transform transition duration-300" : "bg-indigo-600 text-white";

  return (
    <>
      <button
        {...rest}
        type={type}
        disabled={buttonDisabled}
        className={
          "px-5 py-2 font-medium text-white border shadow-2xl rounded-lg hover:shadow-none focus:outline-none " +
          disableTheme +
          " " +
          classTheme 
        }
      >
        {title}
      </button>
    </>
  );
};

Button.defaultProps = {
  type: "button",
  buttonDisabled: false,
  theme: "solid",
};
export default memo(Button);
