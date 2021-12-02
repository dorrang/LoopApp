import React from "react";
import Drumset2 from "./Drumset2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <Route path="/">
        <Drumset2 />
      </Route>

    </Router>
  );
}
