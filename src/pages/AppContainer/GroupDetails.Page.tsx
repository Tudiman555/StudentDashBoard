import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { groupfetchOne } from "../../actions/groups";
import GroupCard from "../../components/GroupCard";
import {
  queryIdsSelector,
  selectedErrorSelector,
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

  const currentIndex = useMemo(() => {
    if (groupIds.length === 0 || groupIds.length === 1) {
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
      {loading && <div>Loading Group Details .....</div>}
      {group && (
        <div className="w-full p-5 space-y-3 ">
          <GroupCard
            title={group?.name}
            description={group?.description}
            src={group?.group_image_url}
          ></GroupCard>
          {currentIndex !== -1 && (
            <div className="flex justify-between ">
              <Link
                to={
                  "/groups/" +
                  groupIds[currentIndex === 0 ? currentIndex : currentIndex - 1]
                }
                className={" bg-green-400 py-2 px-4 rounded-lg text-white font-bold text-center" + " "+(currentIndex === 0 ? "cursor-not-allowed" : "")}
              >
                Previous
              </Link>
              <Link
                to={
                  "/groups/" +
                  groupIds[
                    currentIndex === groupIds.length - 1
                      ? currentIndex
                      : currentIndex + 1
                  ]
                }
                className={"bg-green-400 py-2 px-4 rounded-lg text-white font-bold text-center" + " " +
                  (currentIndex === groupIds.length - 1
                    ? "cursor-not-allowed"
                    : "")
                }
              >
                Next
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

GroupIdPage.defaultProps = {};
export default GroupIdPage;
