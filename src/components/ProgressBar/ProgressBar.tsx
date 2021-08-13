import { Transition } from "@headlessui/react";
import React from "react";

interface Props {
  progress?: number;
  theme?: "Primary" | "Warning" | "Dark";
}

const progressBar: React.FC<Props> = ({ progress, theme }) => {
  const colors = {
    Primary: "bg-indigo-600",
    Warning: "bg-yellow-500",
    Dark: "bg-gray-700",
  };
  const classTheme = colors[theme!];

  return (
    <>
      <div className="relative w-full h-5 bg-gray-400 rounded-full">
        <div
          className={
            "text-center text-white absolute h-full rounded-full text-sm"
          }
          style={{ width: progress + "%" }}
        >
          <Transition
            show={true}
            enter="transition-width ease-in-out duration-1000 "
            enterFrom="w-0 "
            enterTo="w-full "
            entered="w-full "
            className={"rounded-full " + classTheme}
          >
            {progress + "%"}
          </Transition>
        </div>
      </div>
    </>
  );
};

progressBar.defaultProps = {
  progress: 50,
  theme: "Primary",
};
export default progressBar;
