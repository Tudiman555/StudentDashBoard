import React from "react";

interface Props {
    sectionTitle? : string;
}

const ProfileSectionCard : React.FC<Props> = (props) => {
  return (
     <><div className="pb-6"> 
        <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-sm">
            <h2 className="mx-2 mt-1 mb-10 font-semibold tracking-wider">{props.sectionTitle?.toUpperCase()}</h2>
            {props.children}
        </div>
        </div>
     </>
  );
};

ProfileSectionCard.defaultProps = {
    sectionTitle : "Section"
}
export default ProfileSectionCard;
