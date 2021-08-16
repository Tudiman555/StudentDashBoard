import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import { userfetchOne} from "../../actions/users";
import LinkButton from "../../components/LinkButton";
import UserCard from "../../components/UserCard";
import {
  selectedErrorSelector,
  selectedLoadingSelector,
  selectedUserSelector,
  userIdsSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../Store";


interface Props {}

const UserDetailsPage: React.FC<Props> = (props) => {
  const userId = +useParams<{ personId: string }>().personId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userfetchOne(userId));
  }, [userId]);

  const user = useAppSelector(selectedUserSelector);
  const error = useAppSelector(selectedErrorSelector);
  const loading = useAppSelector(selectedLoadingSelector);
  const userIds = useAppSelector(userIdsSelector);

  const noOfusers = userIds.length;

  const currentIndex = useMemo(() => {
    if (noOfusers === 0 || noOfusers === 1) {
      return -1;
    }
    let index = 0;
    userIds.forEach((element, currentIndex) => {
      if (element === userId) {
        index = currentIndex;
      }
    });
    return index;
  }, [userIds, userId]);

  if(error) {
    return <div>Error</div>
  }

  return (
    <>
      {loading && <div className="absolute right-0 text-sm font-bold">Loading User....</div>}
      {user && <div className="w-full p-5 space-y-3 ">
        <UserCard
          first_name={user?.first_name}
          last_name={user?.last_name}
          middle_name={user?.middle_name}
          src={user?.profile_pic_url}
          id={user?.id}
          role={user?.role}
        ></UserCard>
           {currentIndex !== -1 && (
            <div className="flex justify-between ">
              <LinkButton
              title="Previous"
                directTo={
                  "/people/" +
                  userIds[currentIndex === 0 ? currentIndex : currentIndex - 1]
                }
                disabled = {currentIndex === 0}
              >
                Previous
              </LinkButton>
              <LinkButton
              title="Next"
                directTo={
                  "/people/" +
                  userIds[
                    currentIndex === noOfusers - 1
                      ? currentIndex
                      : currentIndex + 1
                  ]
                }
                disabled={currentIndex === noOfusers-1}
              >
                Next
              </LinkButton>
            </div>
          )}
      </div>}
    </>
  );
};

UserDetailsPage.defaultProps = {};
export default UserDetailsPage;
