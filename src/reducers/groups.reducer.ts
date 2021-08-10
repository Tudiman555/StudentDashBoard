import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_RESULTS, GROUP_SELECTED_ID } from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group>{
  query: string;
  queryMap: { [query: string]: number[] };
  SelectedId ? : number
  loading : boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  SelectedId : 0,
  loading : false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      const query = action.payload
      return { ...state, query: query ,loading : true };
    case GROUPS_QUERY_RESULTS:
      const groups: Group[] = action.payload.groups;
      const groupIds = getIds(groups);
      const newState = addMany(state,groups) as GroupState
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loading : false,
      };
    case GROUP_SELECTED_ID :
      return {...state,SelectedId: action.payload}
    default:
      return state;
  }
};
