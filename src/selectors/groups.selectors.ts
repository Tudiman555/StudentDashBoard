import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [ groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupByIdSelector = createSelector([groupStateSelector],(groupState) => groupState.byId);

export const groupsSelector = createSelector([groupQueryMapSelector, groupByIdSelector,groupQuerySelector], (queryMap,byId,query) => {
    const groupIds = queryMap[query] || [];
    const group = groupIds.map((id)=> byId[id]);
    return group;
});



export const groupSelectedIdSelector = createSelector([groupStateSelector],(groupState) => groupState.selectedId);

export const groupsLoadingQuerySelector = createSelector([groupStateSelector],(groupState) => groupState.loading);


export const selectedGroupSelector = createSelector([groupSelectedIdSelector,groupByIdSelector],(id,byId)=> id && byId[id])

