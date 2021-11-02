import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";

import ModelContext from "./context/ModelContext";
function App() {
  const [state,dispatch]=useState({
    modelStatus:false
  })
  return (
    <Router>
      <Switch>
        <ModelContext.Provider value={{state,dispatch}}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </ModelContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
