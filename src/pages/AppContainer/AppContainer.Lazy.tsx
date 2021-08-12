import { lazy } from "react";

const AppContainerLazy = lazy(()=> import("./AppContainer.Page"))

export default AppContainerLazy;
