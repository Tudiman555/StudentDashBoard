import { takeEvery , call,put} from "@redux-saga/core/effects"
import { AnyAction } from "redux"
import { GROUPS_QUERY_CHANGED, } from "../actions/actions.constants"
import { groupQueryResultsAction } from "../actions/groups"
import  {fetchGroups as fetchGroupAPI}  from "../api/groups"

export function* fetchGroups(action : AnyAction) : Generator<any> {
    const group : any = yield call(fetchGroupAPI , { query : action.payload , status : "all-groups" })
    yield put(groupQueryResultsAction(group,action.payload,));
}

export function* watchGroupQueryChanged() {
    yield takeEvery(GROUPS_QUERY_CHANGED,fetchGroups)
} 