import createSagaMiddleware from "redux-saga";
import {all,fork} from "redux-saga/effects";
import { authorizationSaga, userInfoRequestedSaga } from "./auth.sagas";
import { watchGroupId, watchGroupQueryChanged } from "./groups.sagas";
import { watchUserDetails, watchUsers } from "./users.sagas";
export const sagaMiddleware = createSagaMiddleware();


export function* rootSaga() {
    yield all([fork(userInfoRequestedSaga),fork(authorizationSaga),fork(watchGroupQueryChanged),fork(watchGroupId),fork(watchUsers),fork(watchUserDetails)])
}

