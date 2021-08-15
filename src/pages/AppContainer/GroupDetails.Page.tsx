import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { groupfetchOne } from "../../actions/groups";


import GroupCard from "../../components/GroupCard";
import {selectedGroupSelector} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store";
import LoaderPage from "../LoaderPage";

interface Props {}

const GroupIdPage : React.FC<Props> = (props) => {
  const groupId  = +useParams<{groupId : string}>().groupId;
  const dispatch = useDispatch();
  useEffect(()=> {
     dispatch(groupfetchOne(groupId));
  },[groupId]) 


  const group = useAppSelector(selectedGroupSelector)

  if(!group) {
     return <LoaderPage></LoaderPage>
  }
  

  return (
     <>
        <div><GroupCard title={group?.name} description={group?.description} src={group?.group_image_url}></GroupCard></div>
     </>
  );
};

GroupIdPage.defaultProps = {
}
export default GroupIdPage;
