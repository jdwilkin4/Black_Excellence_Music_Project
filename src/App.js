import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './misc-components/Navbar';
import QuizRoutes from './quizzes/QuizRoutes';
import PerformersComposersRoutes from './artists-data/PerformersComposersRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <QuizRoutes />
        </Switch>
        <Switch>
          <PerformersComposersRoutes />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
