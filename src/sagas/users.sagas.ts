import { call, put, takeEvery } from "redux-saga/effects";
import { USERS_REQUESTED, USER_FETCH_ONE } from "../actions/actions.constants";
import { userfetchOneError, userfetchOneResults, usersReceivedAction } from "../actions/users";
import { fetchUserDetails as fetchUserDetailsAPI, fetchUsers as fetchUsersApi} from "../api/users";





function* fetchUsers() : Generator<any>{
    const userResponse : any = yield call(fetchUsersApi)
    yield put(usersReceivedAction(userResponse.data.data));
}




export function* watchUsers() {
    yield takeEvery(USERS_REQUESTED,fetchUsers);
}

function* fetchUserDetails(action : any) : Generator<any>{

    try {
    const userResponse : any = yield call(fetchUserDetailsAPI,action.payload)
    yield put(userfetchOneResults(userResponse.data.data));
    }

    catch(e) {
        const error = e.response.data?.message || "Some error occured"
        yield put(userfetchOneError(action.payload, error))
    }
}




export function* watchUserDetails() {
    yield takeEvery(USER_FETCH_ONE,fetchUserDetails);
}




