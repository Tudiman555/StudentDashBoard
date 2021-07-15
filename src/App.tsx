import React from "react";
import { BrowserRouter, Route , Switch  } from "react-router-dom";
import AuthPage from "./pages/auth.Page";
import NotFound from "./pages/notFound.Page";
import AppContents from "./pages/appContainer.Page";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login","/signUp","/"]} exact>
        <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard","/recordings","/batch/:batchNo/lecture/:lectureNumber"]} exact>
        <AppContents></AppContents>
        </Route>
        <Route >
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
