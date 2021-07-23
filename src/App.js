import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './misc-components/Home';
import Navbar from './misc-components/Navbar';
import QuizRoutes from './quizzes/QuizRoutes';
import PerformersComposersRoutes from './artists-data/PerformersComposersRoutes';
import DayInTheLifeGame from './Day-in-life-game/DayInTheLifeGame';
import ScrollToTop from './misc-components/ScrollToTop';
import Footer from './misc-components/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/dayinlife" exact component={DayInTheLifeGame} />
      <QuizRoutes />
      <PerformersComposersRoutes />
      <Footer />
    </Router>
  );
}

export default App;
