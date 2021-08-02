import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

const ME_FETCH = "me/fetch"

export interface AppState {
    me? : User,
    groups : Group[]
    isSidebarOpen : boolean
}

const initialState : AppState = {
    me : undefined,
    groups : [],
    isSidebarOpen : true,
}

const reducer : Reducer<AppState,AnyAction> = (currentState = initialState , dispatchedAction) => {
    switch(dispatchedAction.type) {
        case ME_FETCH: 
        case 'me/login':
            return {...currentState, me: dispatchedAction.payload};
        default : 
            return currentState;
    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const  meFetchAction = (user : User) => ({type : ME_FETCH , payload : user});

export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;



