
export interface Action<T> {
    type? : string,
    payload? : T
}

//users

export const ME_REQUESTED = "me/requested"
export const ME_RECEIVED = "me/received"
export const ME_LOGIN = "me/login"

//groups

export const GROUPS_QUERY_CHANGED = "group/query";
export const GROUPS_QUERY_RESULTS = "group/query_results";
export const GROUP_SELECTED_ID = "/group/selected/id";

 
