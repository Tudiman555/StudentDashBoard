import React from "react";

interface Props {
}

const AuthHero : React.FC<Props> = (props) => {
  return (
     <>
        <div className="hidden w-1/2 h-screen bg-gray-700 lg:block"></div>
     </>
  );
};

AuthHero.defaultProps = {
}
export default AuthHero;
