import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicPage from "./DynamicPage";
import Home from "./Home";
import NoMatched from "./NoMatched";

function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    setVisible(!visible);
    setTimeout(() => {
      console.log(e.target);
    });
  };
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route component={DynamicPage} exact path='/dynamic'></Route>
        <Route component={NoMatched}></Route>
      </Switch>
    </Router>
  );
}

export default App;
