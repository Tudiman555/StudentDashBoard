import { groupsAction } from "../actions/groups";
import { fetchGroups as fetchGroupsAPI, GroupRequest } from "../api/groups";
import { groupLoadingQueryMapSelector, groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../Store";


export const fetchGroups = (request : GroupRequest) => {
    const loading = groupLoadingQueryMapSelector(store.getState());
    const query = request.query;
    const isLoading = loading[query]

    groupsAction.groupQuery(query);

    if(isLoading) {
        return;
    }

    fetchGroupsAPI(request).then(groups => {
        groupsAction.groupQueryResults(groups,query);
    })
}