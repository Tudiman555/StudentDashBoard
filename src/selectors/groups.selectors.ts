import { createSelector } from "reselect";
import { AppState } from "../Store";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [ groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupIdsSelector = createSelector([groupStateSelector],(groupState) => groupState.byId);

export const groupsSelector = createSelector([groupQueryMapSelector, groupIdsSelector,groupQuerySelector], (queryMap,byId,query) => {
    const groupIds = queryMap[query] || [];
    const group = groupIds.map((id)=> byId[id]);
    return group;
});

export const groupSelectorbyId = (state : AppState) => state.groups.SelectedId;

export const groupLoadingQueryMapSelector = createSelector([groupStateSelector],(groupState) => groupState.queryLoading);

export const groupLoadingSelector = createSelector([groupLoadingQueryMapSelector,groupQuerySelector] ,(loadingMap , query) =>{ return loadingMap[query] })
