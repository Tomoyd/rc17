import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatched from "./NoMatched";
// import DynamicPage from "./DynamicPage";
// import Home from "./Home";
// import NoMatched from "./NoMatched";
import routes from "./router";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                {...route}
                component={lazy(route.component)}
                key={route.path}
              ></Route>
            );
          })}
          <NoMatched></NoMatched>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
