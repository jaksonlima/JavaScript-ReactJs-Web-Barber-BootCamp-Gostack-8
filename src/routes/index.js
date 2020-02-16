import { Switch, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

import Deshboard from "../pages/Deshboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/deshboard" component={Deshboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
