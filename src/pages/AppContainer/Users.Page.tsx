import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usersRequestedAction } from "../../actions/users";
import { usersSelector } from "../../selectors/users.selectors";
import { useAppSelector } from "../../Store";

interface Props {}

const UsersPage: React.FC<Props> = () => {
  const users = useAppSelector(usersSelector);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(usersRequestedAction());
  }, []);

  return (
    <>
      <div className="p-2 space-y-2 ">
        {users.map((user) => (
          <div className="flex flex-col" key={user.id}><Link to={"/people/" + user.id} className="p-2 bg-white rounded-lg hover:bg-gray-400">{user.first_name}</Link></div>
        ))}
      </div>
    </>
  );
};

UsersPage.defaultProps = {};
export default UsersPage;
