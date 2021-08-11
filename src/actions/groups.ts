
import { Group } from "../modals/Group";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_RESULTS, GROUP_SELECTED_ID } from "./actions.constants";




export const groupQueryResultsAction = (groups: Group[], query : string) => ({
    type: GROUPS_QUERY_RESULTS,
    payload: {groups : groups, query :query },
  });

export const groupQueryChangedAction = ( query : string ) => ({
    type : GROUPS_QUERY_CHANGED,
    payload : query
})

export const groupSelectedIdAction = ( id : number) => ({type : GROUP_SELECTED_ID,payload : id})

