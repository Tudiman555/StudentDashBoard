import React from "react";
import {Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Dashboard from "./Dashboard.Page";
import Recordings from "./Recording.Page";
import Lecture from "./Lecture.Page";

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
