import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import Compare from './Compare.js';
import NotFound from './NotFound.js';
import ApplicantDetails from './ApplicantDetails.js'
//import FilterPopup from './FilterPopup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Use this path below for testing purposes */}
            {/* <Route path="/popup">
              <FilterPopup />
            </Route> */}
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/compare">
              <Compare />
            </Route>
            <Route path="/applicants/:id">
              <ApplicantDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
