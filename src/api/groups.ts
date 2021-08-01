import axios from "axios";
import { Group } from "../modals/Group";
import { BASE_URL } from "./base";

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favourite" | "archieved";
  }
  
   export interface GroupResponse {
      data : Group[]
   }
  
   export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
    return axios
      .get<GroupResponse>(url, { params: data })
      .then((response) => { return response.data})
      .catch((e) => console.error(e));
  };
     