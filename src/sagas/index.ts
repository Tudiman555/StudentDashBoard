import createSagaMiddleware from "redux-saga";
import {all,fork} from "redux-saga/effects";
import { authorizationSaga, userInfoRequestedSaga } from "./auth.sagas";
import { watchGroupQueryChanged } from "./groups.sagas";
export const sagaMiddleware = createSagaMiddleware();


export function* rootSaga() {
    yield all([fork(userInfoRequestedSaga),fork(authorizationSaga),fork(watchGroupQueryChanged)])
}

