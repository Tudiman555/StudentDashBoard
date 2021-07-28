import { lazy } from "react";


const AuthLazy = lazy(() => import("./Auth.Page")); 

export default AuthLazy;