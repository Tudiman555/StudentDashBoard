import { Reducer } from "redux";
import {
  ME_RECEIVED,
  USERS_RECEIVED,
  USERS_REQUESTED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_ERROR,
  USER_FETCH_ONE_RESULTS,
  USER_LIST_RECEIVED,
} from "../actions/actions.constants";
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
    case USER_LIST_RECEIVED : {
      const usersById = action.payload;
      return { ...state, byId : { ...state.byId , ...usersById}}
    }
    default:
      return state;
  }
};
