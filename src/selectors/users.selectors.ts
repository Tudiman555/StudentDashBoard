import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";


const usersByIdSelector = createSelector([userStateSelector],(userState) => userState.byId)

export const usersSelector = createSelector(
    [usersByIdSelector],
    (byId) => {
      const users = Object.values(byId);
      return users;
    }
  );

export const userSelectedIdSelector = createSelector([userStateSelector],(userState) => userState.selectedId)
  
export const selectedUserSelector = createSelector([userSelectedIdSelector,usersByIdSelector],(id,byId) => (id ? byId[id] : undefined))

export const selectedErrorSelector = createSelector([userStateSelector],(userState) => userState.errorOne);

export const selectedLoadingSelector = createSelector([userStateSelector],(userState) => userState.loadingOne);

export const userIdsSelector = createSelector([usersByIdSelector],(byId)=>  Object.keys(byId).map(val => +val))