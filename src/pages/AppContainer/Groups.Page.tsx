import React, { memo} from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { groupQueryChangedAction } from "../../actions/groups";
import SearchBar from "../../components/SearchBar/SearchBar";
import { groupsLoadingQuerySelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { store, useAppSelector } from "../../Store";

interface Props {
}

const GroupsPage : React.FC<Props> = (props) => {

const groupData = useAppSelector(groupsSelector); /* redux will only render this component if and only 
                                                                if this state for group changes it will not render the component 
                                                                even if state.me is changed */

  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingQuerySelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = event.target.value;
    store.dispatch<any>(groupQueryChangedAction(changedValue))
    
  };

  
  return (
     <>
     <div >
     <SearchBar value={query} onChange={handleChange}>
            {loading && <div className="pr-2"><FaSpinner className="text-white animate-spin"></FaSpinner></div>}
      </SearchBar>
      <div className="pt-5">
        <div className="grid grid-flow-row grid-cols-3 gap-2">
          {groupData?.map((value,key) => {
            return (
              <div key={value.id}
                className={
                  " text-white hover:opacity-90 rounded-md " +
                  (key % 2 === 0 ? "bg-gray-600" : "bg-gray-400")
                }
              ><Link to={`groups/${value.id}`} className="text-black hover:underline">
              <span >{value.name}</span>
            </Link>
                
              </div>
            );
          })}
        </div>
        {!loading && groupData.length === 0 && <div>Sorry No data Found Please try seaching again with a different keyWord</div>}
        </div>
        </div>
     </>
  );
};

GroupsPage.defaultProps = {
}
export default memo(GroupsPage);
