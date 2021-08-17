import React from "react";
import {Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Dashboard from "./Dashboard.Page";
import Recordings from "./Recording.Page";
import Lecture from "./Lecture.Page";
import Profile from "./Profile.Page";
import GroupsPage from "./Groups.Page";
import GroupDetailsPage from "./GroupDetails.Page";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import UsersPage from "./Users.Page";
import UserDetailsPage from "./UserDetails.Page";


interface Props {
}

const AppContainer : React.FC<Props> = (props) => {
  return (
     <> <div className="h-full bg-gray-300 ">
        <div className="sticky top-0 z-10">
        <NavigationBar></NavigationBar>
        </div>
        <div className="hidden h-full md:block md:fixed">
        <SideBar></SideBar>
        </div>
        <div className="h-full p-4 md:ml-60">
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
           <GroupDetailsPage></GroupDetailsPage>
        </Route>
        <Route path="/people" exact>
           <UsersPage></UsersPage>
        </Route>
        <Route path="/people/:personId">
           <UserDetailsPage></UserDetailsPage>
        </Route>
        </Switch>
        </div>
        </div>
     </>
  );
};

AppContainer.defaultProps = {
}
export default AppContainer;
