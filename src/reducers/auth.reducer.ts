import { Reducer } from "redux"
import { ME_ERROR, ME_LOGIN, ME_RECEIVED, ME_REQUESTED } from "../actions/actions.constants"

 export interface AuthState {
     id? : number;
     error? : string;
 }

 const initialState  = {};

 export const authReducer : Reducer<AuthState> = (state=initialState , action) => {
     switch (action.type) {
         case ME_LOGIN :
         case ME_REQUESTED :
             return state;
         case ME_RECEIVED:
             const userId = action.payload.id as number
             return {...state, id : userId}
        case ME_ERROR : 
            return {...state , error : action.payload}
         default :
            return state;
     }
 }