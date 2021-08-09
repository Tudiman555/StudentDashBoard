import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

export const meSelector = createSelector(
  [authStateSelector,userStateSelector],
  (authState,userState) => {
    const me = authState.id === undefined ? undefined : userState.byId[authState.id]
    return me;
  }
);
