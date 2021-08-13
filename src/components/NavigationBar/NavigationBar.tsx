import React from "react";
import CorkLogo from "../../images/Corklogo.svg"
import SearchBar from "../SearchBar/SearchBar";

interface Props {
}

const NavigationBar : React.FC<Props> = (props) => {
  return (
     <>
        <div className="border-b border-nav">
            <header className="flex items-center w-full h-12 py-1 mb-px bg-nav">
                <div className="flex pl-4 md:pl-8">
                <img src={CorkLogo} alt="" className="w-9 h-9 "  />
                <a href="#" className="px-3 text-2xl font-semibold text-white">CORK</a>
                </div>
                <SearchBar></SearchBar>
            </header>

            
        </div>
     </>
  );
};

NavigationBar.defaultProps = {
}
export default NavigationBar;
