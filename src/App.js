import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContemporaryClassicalComposers from './composers/ClassicalComposers';
import JazzComposersPage from './composers/JazzComposers';
import Navbar from './misc-components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
          <Route path="/jazz-composers" exact component={JazzComposersPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
