import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";
import { rootSaga, sagaMiddleware } from "./sagas";

const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
