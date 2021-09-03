import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Switch} from 'react-router-dom'; 
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
function App() {
  const title = "Welcome to New Blog";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
