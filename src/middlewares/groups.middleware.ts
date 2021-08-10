import axios, { Canceler } from "axios";
import { groupsAction } from "../actions/groups";
import { fetchGroups as fetchGroupsAPI, GroupRequest } from "../api/groups";

let canceler : Canceler | undefined;

export const fetchGroups = (request : GroupRequest) => {
    const query = request.query;
    groupsAction.groupQuery(query);
    canceler && canceler();

    const {cancel , token} = axios.CancelToken.source();
    canceler = cancel;

    fetchGroupsAPI(request , token).then(groups => {
        groupsAction.groupQueryResults(groups,query);
    })
}