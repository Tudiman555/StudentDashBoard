import { Reducer } from "redux";
import { ME_RECEIVED} from "../actions/actions.constants";
import { User } from "../modals/User";
import { EntityState, initialEntityState } from "./entity.reducer";

export interface UserState extends EntityState<User>{
    
}

const initialState : UserState  = {
    ...initialEntityState
}

export const userReducer: Reducer<UserState> = (state = initialState , action) => {
    switch (action.type) {
        case ME_RECEIVED :
            const user : User = action.payload;
            return {...state, byId : {...state.byId,[user.id]: user}}
        default :
            return state;
    }
}