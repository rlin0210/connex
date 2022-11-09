import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Connex MVP</h1>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;