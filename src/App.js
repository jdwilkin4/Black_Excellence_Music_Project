import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContemporaryClassicalComposers from './components/ClassicalComposers';
import JazzComposers from './components/JazzComposers';
const App = () => {
  return (
    <Router>
      <div>
        <Link className="underline text-blue-400" to="/contemporary-composers">Contemporary Classical Composers</Link>
        <br />
        <Link className="underline text-blue-400" to="/jazz-composers">Jazz Composers</Link>


        <Switch>
          <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
          <Route path="/jazz-composers" exact component={JazzComposers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
