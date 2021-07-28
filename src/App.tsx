import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound.Page";
import { LS_LOGIN_TOKEN } from "./Api";
import AppContainerLazy from "./pages/AppContainer/AppContainer.Lazy";
import AuthLazy from "./pages/Auth/Auth.Lazy";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signUp", "/"]} exact>
          <Suspense fallback={<div>Loading Auth Page</div>}>
            <AuthLazy /> 
          </Suspense>
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNo/lecture/:lectureNumber",
          ]}
          exact
        >
          <Suspense fallback={<div>Loading App container Page</div>}>
            <AppContainerLazy />
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
