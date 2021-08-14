import React from "react";

interface Props {
}

const Loading : React.FC<Props> = (props) => {
  return (
     <>
        <div className="w-10 h-10 bg-indigo-600 rounded-full animate-ping"></div>
     </>
  );
};

Loading.defaultProps = {
}
export default Loading;
