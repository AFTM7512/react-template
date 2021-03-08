import React, { ComponentType } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import IfWrap from "@/components/if-wrap/IfWrap.jsx";

interface IRouterConfig {
  routes: IRouteItem[],
  extraProps: any,
}

interface IRouteItem {
  key: string,
  path: string,
  exact?: boolean,
  component: ComponentType,
  routes: IRouteItem,
  // render: () =>
}

interface IRender {
  (): any,
}

export default function RenderRouter(props: IRouterConfig) {
  const { routes, extraProps } = props;
  return (
    <IfWrap when={routes}>
      <Switch>
        {
          routes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              render={(props) =>
                route.render ? (
                  route.render({ ...props, ...extraProps, route: route })
                ) : (
                  <route.component {...props} {...extraProps} route={route} />
                )
              }
            />
          ))
        }
      </Switch>
    </IfWrap>
  );
}