import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 text-sm font-bold md:py-4 bg-primary-400">
        <p className="text-white">STARBUCKS® REWARDS</p>
        <RoundedLink
          linkName="Join in the app"
          linkUrl="#"
          theme="border-white text-white md:hidden"
        />
      </div>
      
    </>
  );
};

Header.defaultProps = {};
export default Header;
