import React from "react";

interface Props {
    linkText : string;
    linkUrl : string;
}

const GreenLink : React.FC<Props> = (props) => {
  return (
     <>
        <a href={props.linkUrl} className="underline hover:no-underline text-primary-300">{props.linkText}</a>
     </>
  );
};

GreenLink.defaultProps = {
}
export default GreenLink;
