import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import IfWrap from "components/if-wrap/IfWrap";
import IRouteItem from "./types";

interface IRouterConfig {
  routes: IRouteItem[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraProps?: any,
}

export default function RenderRouter(props: IRouterConfig) {
  const { routes, extraProps } = props;
  return (
    <IfWrap when={routes}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        {
          routes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              render={(props) =>
                <route.component {...props} {...extraProps} routes={route.routes} />
              }
            />
          ))
        }
      </Switch>
    </IfWrap>
  );
}
