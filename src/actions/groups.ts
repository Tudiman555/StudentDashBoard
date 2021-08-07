import { Group } from "../modals/Group";
import { GROUPS_QUERY, GROUPS_QUERY_RESULTS } from "./actions.constants";




export const groupFetchAction = (groups: Group[], query : string) => ({
    type: GROUPS_QUERY_RESULTS,
    payload: {groups : groups, query :query },
  });

export const groupQueryAction = ( query : string) => ({
    type : GROUPS_QUERY,
    payload : query
})


