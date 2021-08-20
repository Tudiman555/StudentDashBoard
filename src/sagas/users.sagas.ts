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
        /* this yield provides a object of type call to middleware and whenever middleware receives the Promise
        it stops the saga from executing further until promise is resolved*/
    const userResponse : any = yield call(fetchUserDetailsAPI,action.payload)    
    yield put(userfetchOneResults(userResponse.data.data));  // this yield provides an effect i.e. 'put' and saga is stopped here until this effect does its job.
    }

    catch(e) {
        const error = e.response.data?.message || "Some error occured"
        yield put(userfetchOneError(action.payload, error))
    }
}




export function* watchUserDetails() {
    yield takeEvery(USER_FETCH_ONE,fetchUserDetails);
}




//Effects are plain JavaScript objects which contain instructions to be fulfilled by the middleware. Example call , put etc

/*call just like put, returns an Effect which instructs the middleware 
to call a given function with the given arguments. In fact, neither put nor call 
performs any dispatch or asynchronous call by themselves, they return plain JavaScript objects.*/