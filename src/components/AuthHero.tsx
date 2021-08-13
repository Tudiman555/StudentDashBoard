import React from "react";

interface Props {
}

const AuthHero : React.FC<Props> = (props) => {
  return (
     <>
      <div className="items-center justify-center hidden w-1/2 h-screen bg-black lg:flex">
        <div className="w-3/4 bg-black bg-center bg-no-repeat bg-contain bg-hero-pattern h-3/4 ">
        </div>
      </div>
     </>
  );
};

AuthHero.defaultProps = {
}
export default AuthHero;
