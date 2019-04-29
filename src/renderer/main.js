import React from "react";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import { HashRouter, Route, NavLink } from "react-router-dom";

const Home = () => {
  return <div>home</div>;
};

const Main = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <NavLink to="/">Home</NavLink> <span>&nbsp;|&nbsp;</span>
          <NavLink to="/first">First</NavLink> <span>&nbsp;|&nbsp;</span>
          <NavLink to="/second">Second</NavLink> <span>&nbsp;|&nbsp;</span>
          <NavLink to="/third">Third</NavLink>
        </div>

        <hr />

        <Route exact={ true } path="/" component={ Home } />
        <Route path="/first" component={ First } />
        <Route path="/second" component={ Second } />
        <Route path="/third" component={ Third } />
      </HashRouter>

    </div>
  );
};

export default Main;