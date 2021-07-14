import React from "react";

interface Props {
    linkText : string;
    linkUrl? : string;
}

const Link : React.FC<Props> = (props) => {
  return (
     <>
        <a href={props.linkUrl} className="py-8 text-sm font-semibold tracking-widest hover:text-primary-300 ">
            {props.linkText}
        </a>
     </>
  );
};

Link.defaultProps = {
    linkUrl:"#",
}
export default Link;
