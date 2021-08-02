import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound.Page";
import AppContainerLazy from "./pages/AppContainer/AppContainer.Lazy";
import AuthLazy from "./pages/Auth/Auth.Lazy";
import { LS_AUTH_TOKEN } from "./api/base";
import { useEffect } from "react";
import { me } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import { meFetchAction, useAppSelector } from "./Store";

interface Props {}

const App:FC<Props> = () => {
  const user = useAppSelector((state) => state.me);

  const  dispatch = useDispatch();


  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
  
    if(!token) return;
    me().then((u) => {
      dispatch(meFetchAction(u))
    });
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
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <AuthLazy/>
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