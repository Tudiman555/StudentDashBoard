import { lazy } from "react";

const AppContainerPageLazy = lazy(()=> import("./AppContainer.Page"))

export default AppContainerPageLazy;