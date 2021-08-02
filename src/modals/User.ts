export interface User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
    birth_date : string;
    birth_month : string;
    birth_year : string;
    profile_pic_url : string;
}