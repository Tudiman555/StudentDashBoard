import { takeLatest , call,put,delay,takeEvery} from "@redux-saga/core/effects"
import { normalize } from "normalizr"
import { AnyAction } from "redux"
import { GROUPS_QUERY_CHANGED, GROUP_FETCH_ONE} from "../actions/actions.constants"
import { groupfetchOneResults, groupQueryResultsAction } from "../actions/groups"
import { userListReceivedAction } from "../actions/users"
import  {fetchGroupDetails, fetchGroups as fetchGroupAPI}  from "../api/groups"
import { groupSchema } from "../modals/Schema"

function* fetchGroups(action : AnyAction) : Generator<any> {
    yield delay(1000);
    const response : any = yield call(fetchGroupAPI , { query : action.payload , status : "all-groups" })
    const data = normalize(response.data.data,[groupSchema])
    yield put(groupQueryResultsAction(data.entities.groups as any,action.payload));
    yield put(userListReceivedAction(data.entities.user as any));
}

export function* watchGroupQueryChanged() {
    yield takeLatest(GROUPS_QUERY_CHANGED,fetchGroups);
}

function* fetchOne(action : AnyAction) : Generator<any> {

    
    const response : any = yield call(fetchGroupDetails, action.payload) // this response contains the Selected group
    const data = normalize(response,groupSchema); // normalization of group = {...groupState , creator : id , participants : [id , id]}
    yield put(groupfetchOneResults(data.entities.groups as any));  // this returns an object of type put which indicates that middleware should dispatch an action
    yield put(userListReceivedAction(data.entities.user as any));
}

export function* watchGroupId() {
    yield takeEvery(GROUP_FETCH_ONE,fetchOne);

} 