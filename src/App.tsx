import { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound.Page";
import AppContainerLazy from "./pages/AppContainer/AppContainer.Lazy";
import AuthLazy from "./pages/Auth/Auth.Lazy";
import { User } from "./modals/User";
import { LS_AUTH_TOKEN } from "./api/base";
import { useEffect } from "react";
import { me } from "./api/auth";
import { setUser, user } from "./pages/AppContext";

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    me().then((u) => {
      setUser(u);
    });
  }, []);

  console.log("Component Rerendering");

  if (!user && token) {
    return <div>Loading</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signUp", "/"]} exact>
          <Suspense fallback={<div>Loading Auth Page</div>}>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <AuthLazy onLogin={setUser} />
            )}
          </Suspense>
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNo/lecture/:lectureNumber",
            "/profile",
          ]}
          exact
        >
          <Suspense fallback={<div>Loading App container Page</div>}>
            {user ? <AppContainerLazy /> : <Redirect to="/login"></Redirect>}
          </Suspense>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
