import React from "react";

import { useParams } from "react-router-dom";

import GroupCard from "../../components/GroupCard";
import { groupIdsSelector} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store";

interface Props {
    
}
interface parameter {
   id : string;
}

const GroupIdPage : React.FC<Props> = (props) => {
  const parameters  = useParams<parameter>();
  const id = parseInt(parameters.id,10);

  /*useEffect(()=> {
     fetchGroupDetails(id).then((response) =)
  },[id]) */
  const groups = useAppSelector(groupIdsSelector)
  const group = groups[id]

  

  return (
     <>
        <div><GroupCard title={group?.name} description={group?.description} src={group?.group_image_url}></GroupCard></div>
     </>
  );
};

GroupIdPage.defaultProps = {
}
export default GroupIdPage;
