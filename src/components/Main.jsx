import React from "react";
import Drumset from "./Drumset";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <Router>
      {/* <div className="nav"> */}
      {/* <Link className="link" to="/Drumset">
          Drums
        </Link>
        <Link className="link link-home" to="/">
          Home{" "}
        </Link>
        <Link className="link" to="/Piano">
          Piano
        </Link>

        <Switch> */}
      <Route path="/">
        <Drumset />
      </Route>
      {/* </Switch> */}
      {/* </div> */}
    </Router>
  );
}
