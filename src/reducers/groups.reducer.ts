import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_RESULTS } from "../actions/actions.constants";
import { Group } from "../modals/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return { ...state, query: action.payload };
    case GROUPS_QUERY_RESULTS:
      const groups: Group[] = action.payload.groups;
      const groupIds = groups.map((gr) => gr.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        byId: { ...state.byId, ...groupMap },
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
      };
    default:
      return state;
  }
};
