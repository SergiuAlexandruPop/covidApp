import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/errorBoundary/error-boundary.component";

const Homepage = lazy(() => import("./components/homepage/homepage.component"));
const SelectionPage = lazy(() =>
  import("./components/selectionpage/selectionpage.component")
);
const RecomandationsPage = lazy(() =>
  import("./components/recomandationsPage/recomandationspage.component")
);

const App = () => {
  return (
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/selection" component={SelectionPage} />
          <Route exact path="/recomandations" component={RecomandationsPage} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  );
};

export default App;
