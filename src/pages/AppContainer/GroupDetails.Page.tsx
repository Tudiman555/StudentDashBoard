import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import {useParams } from "react-router-dom";
import { groupfetchOne } from "../../actions/groups";
import GroupCard from "../../components/GroupCard";
import LinkButton from "../../components/LinkButton";
import UserCard from "../../components/UserCard";
import {
  queryIdsSelector,
  selectedErrorSelector,
  selectedGroupCreatorSelector,
  selectedGroupSelector,
  selectedLoadingSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store";

interface Props {}

const GroupIdPage: React.FC<Props> = (props) => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(groupfetchOne(groupId));
  }, [groupId]);

  const group = useAppSelector(selectedGroupSelector);
  const error = useAppSelector(selectedErrorSelector);
  const loading = useAppSelector(selectedLoadingSelector);
  const groupIds = useAppSelector(queryIdsSelector);
  const noOfgroups = groupIds.length;
  const groupCreator = useAppSelector(selectedGroupCreatorSelector);

  const currentIndex = useMemo(() => {
    if (noOfgroups === 0 || noOfgroups === 1) {
      return -1;
    }
    let index = 0;
    groupIds.forEach((element, currentIndex) => {
      if (element === groupId) {
        index = currentIndex;
      }
    });
    return index;
  }, [groupIds, groupId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading && <div className="absolute right-0 text-sm font-bold">Loading Group Details .....</div>}
      {group && (
        <div className="w-full p-5 space-y-3 ">
          <GroupCard
            title={group?.name}
            description={group?.description}
            src={group?.group_image_url}
          ></GroupCard>
          <UserCard
          first_name={groupCreator!.first_name}
          last_name={groupCreator!.last_name}
          middle_name={groupCreator!.middle_name}
          src={groupCreator!.profile_pic_url}
          id={groupCreator!.id}
          role={groupCreator!.role}
          ></UserCard>
          {currentIndex !== -1 && (
            <div className="flex justify-between ">
              <LinkButton
              title="Previous"
                directTo={
                  "/groups/" +
                  groupIds[currentIndex === 0 ? currentIndex : currentIndex - 1]
                }
                disabled = {currentIndex === 0}
              >
                Previous
              </LinkButton>
              <LinkButton
              title="Next"
                directTo={
                  "/groups/" +
                  groupIds[
                    currentIndex === noOfgroups - 1
                      ? currentIndex
                      : currentIndex + 1
                  ]
                }
                disabled={currentIndex === noOfgroups-1}
              >
                Next
              </LinkButton>
            </div>
          )}
        </div>
      )}
    </>
  );
};

GroupIdPage.defaultProps = {};
export default GroupIdPage;




// single card displaying the Creator 
// group members list 