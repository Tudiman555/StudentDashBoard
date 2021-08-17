import { Reducer } from "redux";
import {
  GROUPS_QUERY_RESULTS,
  GROUP_FETCH_ONE_RESULTS,
  ME_RECEIVED,
  USERS_RECEIVED,
  USERS_REQUESTED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_ERROR,
  USER_FETCH_ONE_RESULTS,
} from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { User } from "../modals/User";
import {
  addMany,
  addOne,
  EntityState,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface UserState extends EntityState<User> {}

const initialState: UserState = {
  ...initialEntityState,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    /*case GROUP_FETCH_ONE_RESULTS :
      const group : Group = action.payload;
      const userObj = group.creator;
      return addOne(state,userObj,false) as UserState;*/
    case USER_FETCH_ONE:
      return select(state, action.payload) as UserState;
    case USER_FETCH_ONE_RESULTS:
      return addOne(state, action.payload, false) as UserState;
    case USER_FETCH_ONE_ERROR:
      return setErrorForOne(
        state,
        action.payload.id,
        action.payload.msg
      ) as UserState;
    case ME_RECEIVED:
      const user: User = action.payload;
      return addOne(state,user) as UserState;
    case USERS_REQUESTED:
      return {...state,loadingList : true}
    case USERS_RECEIVED: {
      const users: User[] = action.payload;
      const newState = addMany(state, users) as UserState;
      return { ...newState, loadingList: false };
    }
    case GROUPS_QUERY_RESULTS: {
        const groups = action.payload.groups;
        const users = groups.reduce((users : User[],group : Group) => [...users, group.creator,...group.participants,...group.invitedMembers],[])
        return addMany(state,users) as UserState;
    }
    case GROUP_FETCH_ONE_RESULTS : {
      const group : Group = action.payload;
      const users = [group.creator,...group.invitedMembers,...group.participants]
      return addMany(state,users) as UserState
    }
    default:
      return state;
  }
};
