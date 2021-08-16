import { User } from "../modals/User"
import { USERS_RECEIVED, USERS_REQUESTED, USER_FETCH_ONE, USER_FETCH_ONE_ERROR, USER_FETCH_ONE_RESULTS } from "./actions.constants"



export const usersRequestedAction = () => ({type : USERS_REQUESTED});

export const usersReceivedAction = (users : User[]) => ({type : USERS_RECEIVED , payload : users});




export const userfetchOne = ( id : number ) => ({
    type : USER_FETCH_ONE,
    payload : id 
  })
  
  export const userfetchOneResults = (user : User) => ({
    type : USER_FETCH_ONE_RESULTS,
    payload : user
  }) 
  
  export const userfetchOneError = (id : number , msg : string) => ({type : USER_FETCH_ONE_ERROR,payload : {id , msg}})
  
  
  
  