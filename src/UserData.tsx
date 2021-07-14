import React from "react";

interface Props {
  DataName: string;
  DataValues: any[];
}

const UserData: React.FC<Props> = ({ DataName, DataValues }) => {
  return (
    <>
      <div className="flex flex-col flex-shrink-0 pr-10">
        <h1 className="pb-4 font-semibold">{DataName}</h1>
        {DataValues.map((u) => (
          <h2>{u}</h2>
        ))}
      </div>
    </>
  );
};

UserData.defaultProps = {};
export default UserData;
