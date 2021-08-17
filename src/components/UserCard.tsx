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
        <div className="flex flex-col items-center h-40 px-2 py-3 bg-white w-60 rounded-xl hover:h-60">
            <img src={props.src === null ? "https://bitsofco.de/content/images/2018/12/broken-1.png" : props.src } alt="" className="object-cover w-20 h-20 bg-black border rounded-full" onError={(event)=> setDefaultImage(event)} />
                <h1 className="mt-2 text-sm font-bold">{props.first_name +" "+ props.last_name}</h1>
                <p className="mt-2 text-sm">{props.role}</p>
        </div>
     </>
  );
};

UserCard.defaultProps = {
}
export default UserCard;

