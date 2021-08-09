// top level selectors

import { AppState } from "../Store"


export const userStateSelector = (state : AppState) => state.users;
export const groupStateSelector = (state : AppState) => state.groups;
export const authStateSelector =  (state : AppState) => state.auth;