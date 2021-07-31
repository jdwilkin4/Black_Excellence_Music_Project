import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './misc-components/Home';
import Navbar from './misc-components/Navbar';
import QuizRoutes from './quizzes/QuizRoutes';
import PerformersComposersRoutes from './artists-data/PerformersComposersRoutes';
import DayInTheLifeGame from './Day-in-life-game/DayInTheLifeGame';
import Games from './misc-components/Games';
import ScrollToTop from './misc-components/ScrollToTop';
import Footer from './misc-components/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch><Route path="/" exact component={Home} /></Switch>
      <Switch> <Route path="/dayinlife" exact component={DayInTheLifeGame} /></Switch>
      <Switch><Route exact path="/games" component={Games} /></Switch>
      <Switch> <QuizRoutes /></Switch>
      <Switch> <PerformersComposersRoutes /></Switch>
      <Footer />
    </Router>
  );
}

export default App;
