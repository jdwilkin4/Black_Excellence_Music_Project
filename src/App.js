import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContemporaryClassicalComposers from './composers/ClassicalContemporaryComposers';
import JazzComposersPage from './composers/JazzComposers';
import InstrumentalistPage from './Performers/Instrumentalists';
import Navbar from './misc-components/Navbar';
import VocalistsPage from './Performers/VocalistsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
          <Route path="/jazz-composers" exact component={JazzComposersPage} />
          <Route path="/instrumentalists" exact component={InstrumentalistPage} />
          <Route path="/vocalists" exact component={VocalistsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
