import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserData from "./UserData";

interface Props {
  page: number;
  title: string;
}

const UserList: React.FC<Props> = ({ page}) => {
  const [user, setUser] = useState<any>([]);
  useEffect(() => {
    // only fires or executes when dependency array is changed. fires after all components are rendered

    const abc = axios(
      "https://randomuser.me/api/?inc=email,name,gender&" +
        { page } +
        "&results=20" /* this function is added into callback queue after recieving reponse and then 
                                                                            added into function call stack when it is empty for execution*/
    ).then((response) => {
      setUser(response.data.results);
    });
  }, [page]);

  return (
    <>
      <div className = "px-4 py-2 bg-primary-200">
        <div className = "pb-8 text-3xl font-semibold ">Showing the list of Users on Page {page}</div>
        <div className="flex ">
        <UserData
            DataName="S.No"
            DataValues={user.map(
              (u: any, index: number) => (page - 1) * 20 + (index + 1)
            )}
          />
          <UserData
            DataName="Name"
            DataValues={user.map(
              (u: any) => u.name.title + " " + u.name.first + " " + u.name.last
            )}
          />
          <UserData
            DataName="Email"
            DataValues={user.map((u: any) => u.email)}
          />
          <UserData
            DataName="Gender"
            DataValues={user.map((u: any) => u.gender)}
          />
        </div>
      </div>
    </>
  );
};

UserList.defaultProps = {};
export default UserList;
