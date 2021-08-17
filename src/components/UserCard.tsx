import React  from "react";

interface Props {
    first_name : string
    last_name : string
    middle_name : string
    id : number
    role : string
    src : string 
}

const UserCard : React.FC<Props> = (props) => {
    
    const setDefaultImage = (event: any) => {
        event.target.src =
          "https://bitsofco.de/content/images/2018/12/broken-1.png";
      };

  return (
     <>
        <div className="flex px-2 py-3 bg-white rounded-xl">
            <img src={props.src === null ? "https://bitsofco.de/content/images/2018/12/broken-1.png" : props.src } alt="" className="object-cover w-24 h-24 bg-black border rounded-full" onError={(event)=> setDefaultImage(event)} />
            <div className="ml-4">
                <h1 className="mb-4 font-bold">{props.first_name +" "+ props.last_name}</h1>
                <p className="text-sm">{props.role}</p>
            </div>
        </div>
     </>
  );
};

UserCard.defaultProps = {
}
export default UserCard;

