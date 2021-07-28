import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { User } from "../../Api";
import AuthHero from "../../components/AuthHero";
import Login from "./Login.Page";
import SignUp from "./SignUp.Page";


interface Props {
   onLogin : (user : User) => void
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
           <Login onLogin={props.onLogin}></Login>
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
