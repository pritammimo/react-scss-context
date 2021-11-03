import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from './context/providers/ModelProvider';

function App() {
  return (
    <Router>
        <ModelProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        </ModelProvider>
    </Router>
  );
}

export default App;
