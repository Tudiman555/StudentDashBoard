import React, { memo } from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: "Solid" | "Outlined";
  theme?: "Primary" | "Warning" | "Dark";
  title: string;
  type?: "submit" | "button";
  buttonDisabled?: boolean;
}

const Button: React.FC<Props> = ({
  theme,
  buttonStyle,
  buttonDisabled,
  title,
  type,
  ...rest
}) => {
  const disableTheme = buttonDisabled
    ? "cursor-not-allowed shadow-none opacity-80 "
    : "";
  const colors = {
    Primary: "indigo-600",
    Warning: "yellow-500",
    Dark: "gray-700",
  };
  const classTheme = colors[theme!];

  const style =
    buttonStyle === "Solid"
      ? "bg-" + classTheme + " " + "text-white"
      : "border-" +
        classTheme +
        " " +
        "text-" +
        classTheme +
        " " +
        "hover:bg-" +
        classTheme +
        " " +
        "hover:text-white transform transition duration-300";

  return (
    <>
      <button
        {...rest}
        type={type}
        disabled={buttonDisabled}
        className={
          "px-5 py-2 font-medium border shadow-2xl rounded-lg hover:shadow-none focus:outline-none " +
          disableTheme + " " + style
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
  buttonStyle: "Solid",
  theme: "Primary",
};
export default memo(Button);
