import React, { useState } from "react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroups, GroupResponse } from "../../api/groups";

import GroupCard from "../../components/GroupCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { groupFetchAction, GROUP_QUERY, useAppSelector } from "../../Store";
interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const groupData = useAppSelector((state) => {
    const groupIds = state.groupQueryMap[state.groupQuery] || [];
    const group = groupIds.map((id)=> state.groups[id]);
    return group;
    
  }); /* redux will only render this component if and only 
                                                                if this state for group changes it will not render the component 
                                                                even if state.me is changed */

  const dispatcher = useDispatch();
  const query = useAppSelector((state) => state.groupQuery);
  
  const [requesting, setRequesting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = event.target.value;
    dispatcher({type : GROUP_QUERY , payload : changedValue})
  };
  
  useEffect(() => {
    setRequesting(true);
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      dispatcher(groupFetchAction(groups!,query));
      setRequesting(false);
    });
  }, [query]);

  return (
    <>
      <div>
        This is DashBoard.
        <Link to="/recordings" className="text-blue-700 hover:underline">
          <span>Go to Recordings</span>
        </Link>
        <div>
          <SearchBar value={query} onChange={handleChange}>
            {requesting && <FaSpinner className="animate-spin"></FaSpinner>}
          </SearchBar>
        </div>
        <div>
          {groupData?.map((value, key) => {
            return (
              <div
                className={
                  " text-white hover:opacity-90 rounded-xl " +
                  (key % 2 == 0 ? "bg-gray-600" : "bg-gray-400")
                }
              >
                <GroupCard
                  src={value.group_image_url}
                  description={value.description}
                  title={value.name}
                ></GroupCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default Dashboard;
