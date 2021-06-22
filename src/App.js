import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContemporaryClassicalComposers from './components/ClassicalComposers';
import JazzComposers from './components/JazzComposers';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
          <Route path="/jazz-composers" exact component={JazzComposers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
