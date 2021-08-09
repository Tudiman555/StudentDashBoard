import React, { memo} from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../middlewares/groups.middleware";
import SearchBar from "../../components/SearchBar/SearchBar";
import { groupLoadingSelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { store, useAppSelector } from "../../Store";

interface Props {
}

const GroupsPage : React.FC<Props> = (props) => {

const groupData = useAppSelector(groupsSelector); /* redux will only render this component if and only 
                                                                if this state for group changes it will not render the component 
                                                                even if state.me is changed */

  const query = useAppSelector(groupQuerySelector);
  
  const loading = useAppSelector(groupLoadingSelector);


  console.log(store.getState().groups.queryLoading);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = event.target.value;
    fetchGroups({ query : changedValue , status : "all-groups" })
    
  };

  
  return (
     <>
      <div className="flex flex-col space-y-4">
        <div>
          <SearchBar value={query} onChange={handleChange}>
            {loading && <FaSpinner className="animate-spin"></FaSpinner>}
          </SearchBar>
        </div>
        <div >
          {groupData?.map((value,key) => {
            return (
              <div key={value.id}
                className={
                  " text-white hover:opacity-90 rounded-md " +
                  (key % 2 === 0 ? "bg-gray-600" : "bg-gray-400")
                }
              ><Link to={`groups/${value.id}`} className="text-black  hover:underline">
              <span >{value.name}</span>
            </Link>
                
              </div>
            );
          })}
        </div>
        </div>
     </>
  );
};

GroupsPage.defaultProps = {
}
export default memo(GroupsPage);
