import { lazy } from "react";


const AuthLazy = lazy(() => import("./auth.Page")); 

export default AuthLazy;