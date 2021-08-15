import { takeLatest , call,put,delay,takeEvery} from "@redux-saga/core/effects"
import { AnyAction } from "redux"
import { GROUPS_QUERY_CHANGED, GROUP_FETCH_ONE} from "../actions/actions.constants"
import { groupfetchOneResults, groupQueryResultsAction } from "../actions/groups"
import  {fetchGroupDetails, fetchGroups as fetchGroupAPI}  from "../api/groups"

function* fetchGroups(action : AnyAction) : Generator<any> {
    yield delay(1000);
    const groupRes : any = yield call(fetchGroupAPI , { query : action.payload , status : "all-groups" })
    yield put(groupQueryResultsAction(groupRes.data.data,action.payload));
}

export function* watchGroupQueryChanged() {
    yield takeLatest(GROUPS_QUERY_CHANGED,fetchGroups);
}

function* fetchOne(action : AnyAction) : Generator<any> {
    const groupRes : any = yield call(fetchGroupDetails, action.payload) 

    yield put(groupfetchOneResults(groupRes.data.data));
}

export function* watchGroupId() {
    yield takeEvery(GROUP_FETCH_ONE,fetchOne);

} 