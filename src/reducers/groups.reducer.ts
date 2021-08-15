import { Reducer } from "redux";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_RESULTS, GROUP_FETCH_ONE, GROUP_FETCH_ONE_RESULTS, GROUP_SELECTED_ID } from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, addOne, EntityState, getIds, select,} from "./entity.reducer";

export interface GroupState extends EntityState<Group>{
  query: string;
  queryMap: { [query: string]: number[] };
  loading : boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading : false,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_FETCH_ONE : 
      return select(state,action.payload) as GroupState
    case GROUPS_QUERY_CHANGED:
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

    case GROUP_FETCH_ONE_RESULTS : 
      return addOne(state,action.payload) as GroupState
    default:
      return state;
  }
};
