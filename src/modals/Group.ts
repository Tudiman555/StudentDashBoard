import { State } from "./State";
import { User } from "./User";

export interface Group {
    name : string;
    description : string;
    group_image_url : string;
    is_private : boolean;
    introductory_message?: string;
    join_code : string;
    created_at : Date;
    updated_at : Date;
    chatCount : number;
    state : State;
    creator : User[];
    issues : any[];
    invitedMembers : User[];
    participants : User[];
    advocatePage? : string;
}