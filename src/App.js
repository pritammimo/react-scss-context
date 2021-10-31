import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
