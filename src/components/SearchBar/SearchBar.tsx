import { InputHTMLAttributes } from "react";
import { HiSearch } from "react-icons/hi";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    placeholder? : string 
}

const SearchBar : React.FC<Props> = ({placeholder,children,...rest}) => {
  return (
     <>
        <div className="flex items-center bg-gray-800 rounded-lg h-9 ">
          <HiSearch className="w-5 h-5 text-gray-200"></HiSearch>
        <input className="text-white bg-gray-800 focus:outline-none" type="text" placeholder={placeholder} {...rest}/>
        {children}
        </div>
     </>
  );
};

SearchBar.defaultProps = {
    placeholder : "What Do You Want To Search?"
}
export default SearchBar;
