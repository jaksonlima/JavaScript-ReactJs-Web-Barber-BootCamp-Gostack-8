import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth/index";
import DefaultLayout from "../pages/_layouts/default/index";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const singned = false;

  if (!singned && isPrivate) {
    return <Redirect to="/" />;
  }

  if (singned && !isPrivate) {
    return <Redirect to="/deshboard" />;
  }
  // console.tron.log(DefaultLayout);
  const Layout = singned == true ? DefaultLayout : AuthLayout;

  console.tron.log(Layout);

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}
