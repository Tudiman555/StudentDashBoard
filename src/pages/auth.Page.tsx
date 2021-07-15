import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthHero from "../components/authHero";
import Login from "./login.Page";
import SignUp from "./signUp.Page";


interface Props {
}

const auth : React.FC<Props> = (props) => {
  return (
     <>
     <div className="flex justify-between ">
        <Switch>
        <Route path='/' exact>
            <Redirect to="login"></Redirect>
        </Route>
        <Route path="/login">
           <Login></Login>
        </Route>
        <Route path="/signUp">
          <SignUp></SignUp>
        </Route>
        </Switch>
        <AuthHero></AuthHero>
    </div>
     </>
  );
};

auth.defaultProps = {
}
export default auth;
