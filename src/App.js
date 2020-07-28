import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/errorBoundary/error-boundary.component";

// import Homepage from "./components/homepage/homepage.component";
// import SelectionPage from "./components/selectionpage/selectionpage.component";
// import AdvicesPage from "./components/advicespage/advicespage.component";

const Homepage = lazy(() => import("./components/homepage/homepage.component"));
const SelectionPage = lazy(() =>
  import("./components/selectionpage/selectionpage.component")
);
const AdvicesPage = lazy(() =>
  import("./components/advicespage/advicespage.component")
);

const App = () => {
  return (
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/selection" component={SelectionPage} />
          <Route exact path="/recomandations" component={AdvicesPage} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
  );
};

export default App;
