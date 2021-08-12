import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound.Page";
import AppContainerLazy from "./pages/AppContainer/AppContainer.Lazy";
import AuthLazy from "./pages/Auth/Auth.Lazy";
import { LS_AUTH_TOKEN } from "./api/base";
import { useEffect } from "react";

import { store, useAppSelector } from "./Store";
import { meSelector } from "./selectors/auth.selectors";
import { me } from "./api/auth";
import { meFetchAction } from "./actions/auth";

interface Props {}

const App: FC<Props> = () => {
  const user = useAppSelector(meSelector);

  /* redux will only render this component if and only 
  if this state for me changes it will not render the component 
  even if other states are changed to achieve this redux requires 2 conditions to work properly

  
  (i) Never Mutate an old object.
  (ii) Only create a new object when data is actually changed.
  */

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) return;
    me().then(u => store.dispatch(meFetchAction(u)));
  }, []);

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
            {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
          </Suspense>
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNo/lecture/:lectureNumber",
            "/profile",
            "/groups",
            "/groups/:id",
          ]}
          exact
        >
          <Suspense fallback={<div>Loading App container Page</div>}>
            {user ? <AppContainerLazy /> : <Redirect to="/login"></Redirect>}
          </Suspense>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
