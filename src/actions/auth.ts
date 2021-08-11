
import { User } from "../modals/User";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";


 export const meFetchAction = (user: User) => ({
    type: ME_FETCH,
    payload: user,
  });
 export const meLoginAction = (user: User) => ({
    type: ME_LOGIN,
    payload: user,
  });

