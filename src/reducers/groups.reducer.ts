import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_RESULTS,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_ERROR,
  GROUP_FETCH_ONE_RESULTS,
  GROUP_SELECTED_ID,
} from "../actions/actions.constants";
import { Group } from "../modals/Group";
import {
  addMany,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  creators : {[groupId : number] : number};
  members : {[groupId : number] : number[]};
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
  creators : {},
  members : {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState;
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;
      return { ...state, query: query, loadingList: true };
    case GROUPS_QUERY_RESULTS:
      const groups: Group[] = action.payload.groups;
      const groupIds = getIds(groups);
      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
      };
    case GROUP_SELECTED_ID:
      return { ...state, SelectedId: action.payload };

    case GROUP_FETCH_ONE_RESULTS:
      const group : Group = action.payload
      const userMembers = group.participants.map((user) => user.id) 
      return {...state, byId: { ...state.byId, [group.id]: group }, loadingOne : false, creators : {...state.creators, [group.id] : group.creator.id} , members : {...state.members ,[group.id] : userMembers } } as GroupState
    case GROUP_FETCH_ONE_ERROR:
      return setErrorForOne(
        state,
        action.payload.id,
        action.payload.msg
      ) as GroupState;
    default:
      return state;
  }
};
