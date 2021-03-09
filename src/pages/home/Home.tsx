import React,{ FC } from "react";
import IRouteItem from "router/types";
import RenderRouter from "router/RenderRouter";
import { Link } from "react-router-dom";

interface IRouterConfig {
  routes?: IRouteItem[],
}

const Home : FC<IRouterConfig> = ({ routes }) => {
  return (
    <div>
      Home Page
      <div><Link to="/about">To About</Link></div>
        {
          routes && <RenderRouter routes={ routes }  />
        }
    </div>
  );
};

export default Home;