import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from './context/providers/ModelProvider';
import NavProvider from './context/providers/NavProvider';
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import DestinationProvider from "./context/providers/DestinationProvider";

function App() {
  return (
    <Router>
        <ModelProvider>
        <NavProvider>
        <DestinationProvider>
        <Toggle/>
        <Nav />
        <HelmetProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        </HelmetProvider>
        </DestinationProvider>
        </NavProvider>
        </ModelProvider>
    </Router>
  );
}

export default App;
