import { Group } from "../modals/Group";

export const GROUPS_QUERY = "group/query";
export const GROUPS_QUERY_RESULTS = "group/query_results";


export const groupFetchAction = (groups: Group[], query : string) => ({
    type: GROUPS_QUERY_RESULTS,
    payload: {groups : groups, query :query },
  });

export const groupQueryAction = ( query : string) => ({
    type : GROUPS_QUERY,
    payload : query
})


