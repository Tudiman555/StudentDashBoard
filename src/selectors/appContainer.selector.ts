
import { createSelector } from "reselect"
import { appContainerStateSelector } from "./app.selectors"



export const isMenuOpenSelector = createSelector([appContainerStateSelector],(appContainerState)=> appContainerState.isMenuOpen);
export const isSidebarOpenSelector = createSelector([appContainerStateSelector],(appContainerState)=> appContainerState.isSidebarOpen);