import { User } from "../modals/User";
import {
  ME_REQUESTED,
  ME_LOGIN,
  ME_RECEIVED,
  ME_ERROR,
} from "./actions.constants";

export const meRequestedAction = () => ({ type: ME_REQUESTED });

export const meReceivedAction = (user: User) => ({
  type: ME_RECEIVED,
  payload: user,
});
export const meLoginAction = (credentials: any) => ({
  type: ME_LOGIN,
  payload: credentials,
});

export const meErrorAction = (error? : string) => ({
  type: ME_ERROR,
  payload: error,
});