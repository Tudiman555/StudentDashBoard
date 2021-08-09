import { bindActionCreators } from "redux";
import { User } from "../modals/User";
import { store } from "../Store";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";


 const meFetchAction = (user: User) => ({
    type: ME_FETCH,
    payload: user,
  });
 const meLoginAction = (user: User) => ({
    type: ME_LOGIN,
    payload: user,
  });


export const authActions = bindActionCreators({
  fetch : meFetchAction,
  login : meLoginAction,
},store.dispatch)