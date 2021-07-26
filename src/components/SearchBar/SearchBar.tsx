import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    placeholder? : string 
}

const SearchBar : React.FC<Props> = ({placeholder,children,...rest}) => {
  return (
     <>
        <div className="flex items-center">
        <input className="text-white bg-black border w-80 focus:outline-none" type="text" placeholder={placeholder} {...rest}/>
        {children}
        </div>
     </>
  );
};

SearchBar.defaultProps = {
    placeholder : "What Do You Want To Search?"
}
export default SearchBar;
