import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usersRequestedAction } from "../../actions/users";
import UserCard from "../../components/UserCard";
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
      <div className="grid grid-cols-3 gap-2">
        {users.map((user) => (
          <Link to={"/people/" + user.id} >
          <UserCard
          first_name={user?.first_name}
          last_name={user?.last_name}
          middle_name={user?.middle_name}
          src={user?.profile_pic_url}
          id={user?.id}
          role={user?.role}
        ></UserCard>
          </Link>
        ))}
      </div>
    </>
  );
};

UsersPage.defaultProps = {};
export default UsersPage;
