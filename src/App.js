import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './misc-components/Home';
import Navbar from './misc-components/Navbar';
import QuizRoutes from './quizzes/QuizRoutes';
import PerformersComposersRoutes from './artists-data/PerformersComposersRoutes';

const App = () => {
  return (
    <Router>

      <Navbar />
      <Route path="/" exact component={Home} />
      <QuizRoutes />
      <PerformersComposersRoutes />

    </Router>
  );
}

export default App;
