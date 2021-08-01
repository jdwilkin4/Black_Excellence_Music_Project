import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Footer = lazy(() => import('./misc-components/Footer'))
const ScrollToTop = lazy(() => import('./misc-components/ScrollToTop'))
const Games = lazy(() => import('./misc-components/Games'))
const DayInTheLifeGame = lazy(() => import('./Day-in-life-game/DayInTheLifeGame'))
const PerformersComposersRoutes = lazy(() => import('./artists-data/PerformersComposersRoutes'))
const QuizRoutes = lazy(() => import('./quizzes/QuizRoutes'))
const Navbar = lazy(() => import('./misc-components/Navbar'))
const renderLoader = () => <p>Loading...</p>;
const Home = lazy(() => import('./misc-components/Home'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={renderLoader()}>
        <ScrollToTop />
        <Navbar />
        <Switch><Route path="/" exact component={Home} /></Switch>
        <Switch> <Route path="/dayinlife" exact component={DayInTheLifeGame} /></Switch>
        <Switch><Route exact path="/games" component={Games} /></Switch>
        <Switch> <QuizRoutes /></Switch>
        <Switch> <PerformersComposersRoutes /></Switch>
        <Footer />
      </Suspense>

    </Router>
  );
}

export default App;
