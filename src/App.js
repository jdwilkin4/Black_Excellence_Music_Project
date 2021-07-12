import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContemporaryClassicalComposers from './composers/ClassicalContemporaryComposers';
import JazzComposersPage from './composers/JazzComposers';
import InstrumentalistPage from './Performers/Instrumentalists';
import Navbar from './misc-components/Navbar';
import VocalistsPage from './Performers/VocalistsPage';
import QuizzesPage from './quizzes/QuizzesPage';
import ArmstrongQuiz from './quizzes/ArmstrongQuiz';
import FitzgeraldQuiz from './quizzes/FitzgeraldQuiz';
import ColerdigeTaylorQuiz from './quizzes/ColeridgeTaylorQuiz';

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
          <Route path="/quizzes" exact component={QuizzesPage} />
          <Route path="/armstrongquiz" exact component={ArmstrongQuiz} />
          <Route path="/fitzgeraldquiz" exact component={FitzgeraldQuiz} />
          <Route path="/coleridgequiz" exact component={ColerdigeTaylorQuiz} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
