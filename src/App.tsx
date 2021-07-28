import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound.Page";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
 
const AuthPageLazy = lazy(() => import("./pages/Auth/auth.Page"));

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
            <AuthPageLazy /> 
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
            <AppContainerPageLazy />
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
