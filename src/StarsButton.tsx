import React from "react";

interface Props {
  NoOfStars: number;
}

const StarsButton: React.FC<Props> = (props) => {
  return (
    <>
      <button className="w-1/5 p-2 pb-4 font-medium tracking-wide text-19p md:text-2xl min-w-max">
        {props.NoOfStars}
        <span className="text-sm text-golden md:text-base">★</span>
      </button>
    </>
  );
};

StarsButton.defaultProps = {};
export default StarsButton;
