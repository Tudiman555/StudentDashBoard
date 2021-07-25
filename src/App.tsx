import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/auth.Page";
import NotFound from "./pages/notFound.Page";
import AppContents from "./pages/appContainer.Page";
import { LS_LOGIN_TOKEN } from "./api";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
   
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" />: <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signUp", "/"]} exact>
          <AuthPage></AuthPage>
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNo/lecture/:lectureNumber",
          ]}
          exact
        >
          <AppContents></AppContents>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
