import { takeEvery , call,put} from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { ME_LOGIN, ME_REQUESTED, } from "../actions/actions.constants"
import { meReceivedAction } from "../actions/auth"
import  {Login, me as meAPI}  from "../api/auth"
import { LS_AUTH_TOKEN } from "../api/base";

export function* me() : Generator<any> {
    const user : any = yield call(meAPI);
    yield put(meReceivedAction(user.data.data));
}

export function* userInfoRequestedSaga() {
    yield takeEvery(ME_REQUESTED, me);
} 


export function* login(action : AnyAction) : Generator<any> {
    const response : any = yield call(Login,{ email : action.payload.email, password : action.payload.password})
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    yield put(meReceivedAction(response.data.user));
    window.location.href = "/dashboard"

}

export function* authorizationSaga() {
    yield takeEvery(ME_LOGIN,login);
}