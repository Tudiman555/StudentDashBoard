import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";
import { usersByIdSelector } from "./users.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupSelectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const groupsLoadingQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

export const selectedErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne
);

export const selectedLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const queryIdsSelector = createSelector(
  [groupQueryMapSelector, groupQuerySelector],
  (queryMap, query) => queryMap[query] || []
);

export const selectedGroupSelector = createSelector(
  [groupSelectedIdSelector, groupByIdSelector],
  (id, byId) => (id ? byId[id] : undefined)
);

export const groupsSelector = createSelector(
  [queryIdsSelector, groupByIdSelector],
  (groupIds, byId) => {
    const group = groupIds.map((id) => byId[id]);
    return group;
  }
);

export const groupCreatorIdSelector = createSelector([selectedGroupSelector],(group) => group?.creator)
export const groupMembersIdsSelector = createSelector([selectedGroupSelector],(group) => group?.participants as any || [])

export const selectedGroupCreatorSelector = createSelector([usersByIdSelector,groupCreatorIdSelector],(byId,id) => id ?  byId[id as any] : undefined )

export const selectedGroupMembers = createSelector([usersByIdSelector,groupMembersIdsSelector],(byId,member)=> member!.map((id : any)=> byId[id] ) )
