import React from "react";

interface Props {
}

const NotFoundPage : React.FC<Props> = (props) => {
  return (
     <>
        <div className="bg-red-800">Page Not Found</div>
     </>
  );
};

NotFoundPage.defaultProps = {
}
export default NotFoundPage;
