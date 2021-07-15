import React from "react";
import {Route, Switch } from "react-router-dom";
import SideBar from "../components/sideBar";
import Dashboard from "./dashboard.Page";
import Recordings from "./recording.Page";
import Lecture from "./lecture.Page";

interface Props {
}

const AppContainer : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex ">
        <SideBar></SideBar>
        <Switch>
        <Route path="/dashboard">
           <Dashboard></Dashboard>
        </Route>
        <Route path="/recordings">
           <Recordings></Recordings>
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
           <Lecture></Lecture>
        </Route>
        </Switch>
        </div>
     </>
  );
};

AppContainer.defaultProps = {
}
export default AppContainer;
