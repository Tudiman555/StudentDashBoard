import { bindActionCreators } from "redux";
import { Group } from "../modals/Group";
import { store } from "../Store";
import { GROUPS_QUERY, GROUPS_QUERY_RESULTS, GROUP_SELECTED_ID } from "./actions.constants";




export const groupFetchAction = (groups: Group[], query : string) => ({
    type: GROUPS_QUERY_RESULTS,
    payload: {groups : groups, query :query },
  });

export const groupQueryAction = ( query : string ,loading : boolean ) => ({
    type : GROUPS_QUERY,
    payload : {query,loading}
})

export const groupSelectedIdAction = ( id : number) => ({type : GROUP_SELECTED_ID,payload : id})

export const groupsAction = bindActionCreators({
  groupQueryResults : groupFetchAction,
  groupQuery : groupQueryAction
},store.dispatch)


