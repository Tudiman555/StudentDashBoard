import React from "react";

interface Props {
}

const NotFound : React.FC<Props> = (props) => {
  return (
     <>
        <div className="bg-red-800">Page Not Found</div>
     </>
  );
};

NotFound.defaultProps = {
}
export default NotFound;
