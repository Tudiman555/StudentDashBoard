import React, { memo, useEffect, useMemo } from "react";
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
  selectedGroupMembers,
  selectedGroupSelector,
  selectedLoadingSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store";

interface Props {}

const GroupIdPage: React.FC<Props> = (props) => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  console.log(groupId);
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
  const members = useAppSelector(selectedGroupMembers);
  const currentIndex = useMemo(() => {
    if (noOfgroups === 0 || noOfgroups === 1) {
      return -1;
    }
    let index = 0;
    groupIds.forEach((element, currentIndex) => {
      if (+element === groupId) {
        index = currentIndex;
      }
    });
    return index;
  }, [groupIds, groupId]);
  console.log("current index" ,currentIndex);

  if (error) {
    return <div>{error}</div>;
  }
  const nextUrl = "/groups/"+groupIds[(currentIndex === noOfgroups - 1) ? currentIndex : currentIndex + 1]
  const preUrl =  "/groups/"+groupIds[(currentIndex === 0) ? currentIndex : currentIndex - 1]
  console.log(members)

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
          {groupCreator !== undefined ? <div>This is Creator Of This Group<UserCard
          first_name={groupCreator!.first_name}
          last_name={groupCreator!.last_name}
          middle_name={groupCreator!.middle_name}
          src={groupCreator!.profile_pic_url}
          id={groupCreator!.id}
          role={groupCreator!.role}
          ></UserCard></div> : <div>Creator Of This Group Does Not Exist</div>}
          {(members.length !== 0) ? (<div>These Are The Members{members.map((member : any) => <UserCard
          first_name={member?.first_name}
          last_name={member?.last_name}
          middle_name={member?.middle_name}
          src={member?.profile_pic_url}
          id={member?.id}
          role={member?.role}
          ></UserCard> )}
          </div>) : <div>There Are No Member in This Group</div>}
          {currentIndex !== -1 && (
            <div className="flex justify-between ">
              <LinkButton
              title="Previous"
                directTo={preUrl}
                disabled = {currentIndex === 0 ? true : false}
              >
                {"Previous"}
              </LinkButton>
              <LinkButton
              title="Next"
                directTo={nextUrl}
                disabled={currentIndex === noOfgroups-1}>
                {"Next"}
              </LinkButton>
            </div>
          )}
        </div>
      )}
    </>
  );
};

GroupIdPage.defaultProps = {};
export default memo(GroupIdPage);




// single card displaying the Creator 
// group members list 