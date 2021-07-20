import React from "react";

interface Props {
  progress?: number;
  theme?: "basic" | "gradient";
}

const progressBar: React.FC<Props> = ({ progress, theme }) => {

    const themeClass = (theme === "basic")
    ? " bg-indigo-600"
    : " bg-gradient-to-r from-green-400 to-blue-500"
  return (
    <>
      <div className="relative w-full h-5 bg-gray-400 rounded-full">
        <div
          className={
            "absolute h-full rounded-full " + themeClass
          }
          style={{ width: progress + "%" }}
        ></div>
      </div>
    </>
  );
};

progressBar.defaultProps = {
  progress: 50,
  theme: "basic",
};
export default progressBar;
