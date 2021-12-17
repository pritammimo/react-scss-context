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
import Details from "./pages/Details";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import Contact from "./pages/Contact";
import AnimationsProvider from "./context/providers/AnimationsProvider";
function App() {
  return (
    <Router>
        <ModelProvider>
        <NavProvider>
        <GalleryProvider>
        <DestinationProvider>
        <SharedProvider>
        <AnimationsProvider>
        <Toggle/>
        <Nav />
        <HelmetProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
        </HelmetProvider>
        </AnimationsProvider>
        </SharedProvider>
        </DestinationProvider>
        </GalleryProvider>
        </NavProvider>
        </ModelProvider>
    </Router>
  );
}

export default App;
