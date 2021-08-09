import { groupsAction } from "../actions/groups";
import { fetchGroups as fetchGroupsAPI, GroupRequest } from "../api/groups";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../Store";


export const fetchGroups = (request : GroupRequest) => {
    const queryMap = groupQueryMapSelector(store.getState());
    const query = request.query;
    const groupIds = queryMap[query]

    groupsAction.groupQuery(query,!groupIds);

    if(groupIds) {
        return;
    }

    fetchGroupsAPI(request).then(groups => {
        groupsAction.groupQueryResults(groups,query);
    })
}