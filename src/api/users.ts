import axios  from "axios";
import { User } from "../modals/User";
import { BASE_URL} from "./base";

  
   export interface UserResponse {
      data : User[]
   }

  
   export const fetchUsers = () => {
    const url = BASE_URL + "/people";
    return axios.get<UserResponse>(url);
  };

  export const fetchUserDetails = (id : number ) => {
    const url = BASE_URL + "/people/" + id;
    return axios.get(url);
  }
     