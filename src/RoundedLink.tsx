import React from "react";

interface Props {
    linkName : string;
    linkUrl : string;
    theme : string;
}

const RoundedLink : React.FC<Props> = (props) => {

  return (
     <>
        <a href={props.linkUrl}  className={"px-4 text-sm font-semibold border rounded-full py-7p flex-shrink-0 "+ props.theme }>{props.linkName}</a>
     </>
  );
};

RoundedLink.defaultProps = {
}
export default RoundedLink;
