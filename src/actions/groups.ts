
import { Group } from "../modals/Group";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_RESULTS, GROUP_FETCH_ONE, GROUP_FETCH_ONE_ERROR, GROUP_FETCH_ONE_RESULTS} from "./actions.constants";




export const groupQueryResultsAction = (groups: Group[], query : string) => ({
    type: GROUPS_QUERY_RESULTS,
    payload: {groups : groups, query :query },
  });

export const groupQueryChangedAction = ( query : string ) => ({
    type : GROUPS_QUERY_CHANGED,
    payload : query
})



//  action creators for Fetching Individual Group


export const groupfetchOne = ( id : number ) => ({
  type : GROUP_FETCH_ONE,
  payload : id 
})

export const groupfetchOneResults = (group : Group) => ({
  type : GROUP_FETCH_ONE_RESULTS,
  payload : group
}) 

export const groupfetchOneError = (id : number , msg : string) => ({type : GROUP_FETCH_ONE_ERROR,payload : {id , msg}})



