import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContemporaryClassicalComposers from './components/ClassicalComposers';
const App = () => {
  return (
    <Router>
      <div>
        <Link to="/contemporary-composers">Contemporary Classical Composers</Link>

        <Switch>
          <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
