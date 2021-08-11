import { takeLatest , call,put,delay} from "@redux-saga/core/effects"
import { AnyAction } from "redux"
import { GROUPS_QUERY_CHANGED, } from "../actions/actions.constants"
import { groupQueryResultsAction } from "../actions/groups"
import  {fetchGroups as fetchGroupAPI}  from "../api/groups"

export function* fetchGroups(action : AnyAction) : Generator<any> {
    yield delay(1000);
    const groupRes : any = yield call(fetchGroupAPI , { query : action.payload , status : "all-groups" })
    yield put(groupQueryResultsAction(groupRes.data.data,action.payload));
}

export function* watchGroupQueryChanged() {
    yield takeLatest(GROUPS_QUERY_CHANGED,fetchGroups);
} 