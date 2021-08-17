import { InputHTMLAttributes } from "react";
import { HiSearch } from "react-icons/hi";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    placeholder? : string 
}

const SearchBar : React.FC<Props> = ({placeholder,children,...rest}) => {
  return (
     <>
        <div className="relative flex items-center mr-auto bg-gray-800 rounded-lg h-9 w-80">
         <HiSearch className="absolute w-5 h-5 text-gray-300 left-1"></HiSearch> 
        <input className="w-full pl-8 text-white bg-gray-800 focus:outline-none focus:placeholder-opacity-25" type="text" placeholder={placeholder} {...rest}/>
        {children}
        </div>
     </>
  );
};

SearchBar.defaultProps = {
    placeholder : "What Do You Want To Search?"
}
export default SearchBar;
