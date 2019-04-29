import React from "react";
import Home from "./pages/home";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <HashRouter>
        <>
          <div>
            <NavLink to="/">Home</NavLink> <span>&nbsp;|&nbsp;</span>
            <NavLink to="/first">First</NavLink> <span>&nbsp;|&nbsp;</span>
            <NavLink to="/second">Second</NavLink> <span>&nbsp;|&nbsp;</span>
            <NavLink to="/third">Third</NavLink>
          </div>

          <hr />
          <Switch>
            <Route exact={ true } path="/" component={ Home } />
            <Route path="/first" component={ First } />
            <Route path="/second" component={ Second } />
            <Route path="/third" component={ Third } />
          </Switch>
        </>
      </HashRouter>
    </div>
  );
};

export default Main;