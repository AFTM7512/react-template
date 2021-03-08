import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "../page/home-page/HomePage.jsx";
import ToDo from "../page/todo/ToDo.jsx";
import Plan from "../page/plan/Plan.jsx";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/home/homePage" component={HomePage}></Route>
      <Route path="/home/todo" component={ToDo}></Route>
      <Route path="/home/plan" component={Plan}></Route>
      <Redirect exact to="/home/homePage" />
    </Switch>
  );
}