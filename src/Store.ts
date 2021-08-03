import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

// Actions

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";
export const GROUP_QUERY = "group/query";
export const GROUP_QUERY_RESULTS = "group/query_results";

export interface AppState {
  me?: User;
  groupQuery: string;
  groupQueryMap: { [query: string]: number[] }; // this will act as cache storage when user is offline
  groups: { [id: number]: Group }; // this aproach is best when it comes to searching a group by groups index
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  groupQuery: "",
  groups: {},
  groupQueryMap: {},
  isSidebarOpen: true,
};

const reducer: Reducer<AppState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };
    case GROUP_QUERY:
      return { ...state, groupQuery: action.payload };
    case GROUP_QUERY_RESULTS:
      const groups: Group[] = action.payload.groups;
      const groupIds = groups.map((gr) => gr.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        groups: { ...state.groups, ...groupMap },
        groupQueryMap: {
          ...state.groupQueryMap,
          [action.payload.groupQuery]: groupIds,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});
export const groupFetchAction = (groups: Group[], query : string) => ({
  type: GROUP_QUERY_RESULTS,
  payload: {groups : groups,groupQuery :query },
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
