import React from "react";

interface Props {
}

const NotFoundPage : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 text-5xl font-extrabold text-indigo-600 md:text-7xl">
           <h1 className="tracking-wider">Page Not Found</h1>
           <a href="/" className="px-4 py-2 text-lg font-medium text-indigo-600 bg-white border-2 border-indigo-600 shadow-xl rounded-xl hover:bg-indigo-600 hover:text-white">Back To Home Page</a>
        </div>
     </>
  );
};

NotFoundPage.defaultProps = {
}
export default NotFoundPage;
