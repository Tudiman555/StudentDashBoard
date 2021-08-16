import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement>{
    title? : string
    description? : string 
}

const GroupCard : React.FC<Props> = ({src,description,title}) => {

    const setDefaultImage = (event: any) => {
        event.target.src =
          "https://bitsofco.de/content/images/2018/12/broken-1.png";
      };

  return (
     <>
        <div className="flex px-2 py-3 bg-white rounded-xl">
            <img src={src === null ? "https://bitsofco.de/content/images/2018/12/broken-1.png" : src } alt="" className="object-cover w-24 h-24 bg-black border rounded-full" onError={(event)=> setDefaultImage(event)} />
            <div className="ml-4">
                <h1 className="mb-4 font-bold">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
     </>
  );
};

GroupCard.defaultProps = {
}
export default GroupCard;
