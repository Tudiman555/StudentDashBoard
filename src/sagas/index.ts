import createSagaMiddleware from "redux-saga";
import {all,fork} from "redux-saga/effects";
import { authorizationSaga, userInfoRequestedSaga } from "./auth.sagas";
import { watchGroupId, watchGroupQueryChanged } from "./groups.sagas";
import { watchUserDetails, watchUsers } from "./users.sagas";
export const sagaMiddleware = createSagaMiddleware();


export function* rootSaga() {
    //This Saga yields an array with the results of calling our sagas.This means the resulting Generators will be started in parallel
    yield all([fork(userInfoRequestedSaga),fork(authorizationSaga),fork(watchGroupQueryChanged),fork(watchGroupId),fork(watchUsers),fork(watchUserDetails)])
}

