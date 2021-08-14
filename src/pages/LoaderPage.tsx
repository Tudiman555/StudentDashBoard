import React from "react";
import Loading from "../components/Loading/Loading";

interface Props {
}

const LoaderPage : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex items-center justify-center w-full h-screen bg-white">
            <Loading></Loading>
        </div>
     </>
  );
};

LoaderPage.defaultProps = {
}
export default LoaderPage;
