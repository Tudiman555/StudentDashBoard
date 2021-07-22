import React from "react";
import Avatar from "../Avatar/avatar";
import Tom from "../../images/Tom.jpg";

interface Props {
  maxUserToDisplay: number;
  avatarUrls?: string[];
}

const displayStackingAvatar: React.FC<Props> = ({
  maxUserToDisplay,
  avatarUrls,
}) => {
  const avatars = avatarUrls?.map((address) => {
    return <Avatar onlineStatus={undefined} image={address}></Avatar>;
  });

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
                  +{avatars!.length - maxUserToDisplay}More
                </div>
              </div>
            );
          }
          if (i < maxUserToDisplay)
            return <div className={"absolute left-" + shift}>{e}</div>;
        })}
      </div>
    </>
  );
};

displayStackingAvatar.defaultProps = {
  maxUserToDisplay: 4,
  avatarUrls: [
    "https://pbs.twimg.com/profile_images/1060274716043345923/jVSWVi9g_400x400.jpg",
    "https://artfiles.alphacoders.com/125/125164.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxN8dKD4P9QL3IpbuGH8tBPhEVbBySgo3w0w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqVJ4lmhiOnWI43pGSNDQFmXCUs0UDflVkA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYc1U9rWvVaaU4_oHTwW18Cxbe0eONgfP-Q&usqp=CAU",
  ],
};
export default displayStackingAvatar;
