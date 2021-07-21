import React from "react";
import Avatar from "../Avatar/avatar";
import Tom from "../../images/Tom.jpg";

interface Props {
  maxUserToDisplay: number;
  avatars?: JSX.Element[];
}

const avatar = <Avatar onlineStatus={undefined} image={Tom}></Avatar>;
const av = [avatar, avatar, avatar, avatar, avatar];
const displayStackingAvatar: React.FC<Props> = ({ maxUserToDisplay ,avatars}) => {
  return (
    <>
      <div className="relative flex bg-white">
        {avatars!.map((e, i) => {
          const shift = i * 20;
          if (i == maxUserToDisplay) {
            return (
              <div
                className={"flex items-center absolute w-24 h-24 left-" + shift}
              >
                <div className="w-20 h-8 text-lg text-justify text-indigo-600 transition-colors duration-100 transform rounded-full shadow-lg cursor-default bg-gray-50 hover:-translate-y-2">
                  +{av.length - maxUserToDisplay}More
                </div>
              </div>
            );
          }
          if( i < maxUserToDisplay)
          return <div className={"absolute left-" + shift}>{e}</div>;
        })}
      </div>
    </>
  );
};

displayStackingAvatar.defaultProps = {
  maxUserToDisplay: 4,
  avatars : av,
};
export default displayStackingAvatar;
