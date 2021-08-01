import React from "react";
import {Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Dashboard from "./Dashboard.Page";
import Recordings from "./Recording.Page";
import Lecture from "./Lecture.Page";
import Profile from "./Profile.Page";


interface Props {
}

const AppContainer : React.FC<Props> = (props) => {
  return (
     <>
        <div className="flex w-full bg-gray-300">
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
        <Route path="/profile">
           <Profile data={ {id : 0,
  first_name : "Tushar",
  middle_name : "",
  last_name: "Agarwal",
  role: "staff",
  birth_date : "22",
  birth_month : "11",
  birth_year : "2000",
  profile_pic_url : ""}}></Profile>
        </Route>
        </Switch>
        </div>
     </>
  );
};

AppContainer.defaultProps = {
}
export default AppContainer;
