import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClassicalComposers from './components/ClassicalComposers';
const App = () => {
  return (
    <Router>
      <div>
        <Link to="/classical-composers">Classical Composers</Link>

        <Switch>
          <Route path="/classical-composers" exact component={ClassicalComposers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
