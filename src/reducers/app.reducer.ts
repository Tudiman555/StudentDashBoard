import { Reducer } from "redux";
import { MENU_TOGGLE, SIDEBAR_TOGGLE } from "../actions/actions.constants";

export interface AppContainerState {
    isMenuOpen : boolean
    isSidebarOpen : boolean
}

const initialState = {
    isMenuOpen : false,
    isSidebarOpen : true,
}

export const appContainerReducer : Reducer<AppContainerState> = (state=initialState , action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE : 
            return {...state , isSidebarOpen : !state.isSidebarOpen}
        case MENU_TOGGLE :
            return {...state , isMenuOpen : !state.isMenuOpen}
        default :
           return state;
    }
}