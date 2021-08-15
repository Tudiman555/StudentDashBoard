import React from "react";
import {Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Dashboard from "./Dashboard.Page";
import Recordings from "./Recording.Page";
import Lecture from "./Lecture.Page";
import Profile from "./Profile.Page";
import GroupsPage from "./Groups.Page";
import GroupIdPage from "./GroupId.Page";
import NavigationBar from "../../components/NavigationBar/NavigationBar";


interface Props {
}

const AppContainer : React.FC<Props> = (props) => {
  return (
     <>
        <div>
        <NavigationBar></NavigationBar>
        </div>
        <div className="flex w-full bg-gray-300">
        <SideBar></SideBar>
        <Switch >
        <Route path="/dashboard">
           <Dashboard></Dashboard>
        </Route>
        <Route path="/recordings">
           <Recordings></Recordings>
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
           <Lecture></Lecture>
        </Route>
        <Route path="/profile">
           <Profile></Profile>
        </Route>
        <Route path="/groups" exact>
           <GroupsPage></GroupsPage>
        </Route>
        <Route path="/groups/:groupId">
           <GroupIdPage></GroupIdPage>
        </Route>
        </Switch>
        </div>
     </>
  );
};

AppContainer.defaultProps = {
}
export default AppContainer;
