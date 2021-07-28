import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound.Page";
import { LS_LOGIN_TOKEN, User } from "./Api";
import AppContainerLazy from "./pages/AppContainer/AppContainer.Lazy";
import AuthLazy from "./pages/Auth/Auth.Lazy";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  const [user,setUser] = useState<User>();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signUp", "/"]} exact>
          <Suspense fallback={<div>Loading Auth Page</div>}>
          { token ? <Redirect to="/dashboard" /> : <AuthLazy onLogin={setUser}/> } 
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
            {token ?<AppContainerLazy /> : <Redirect to="/login"></Redirect>}
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
