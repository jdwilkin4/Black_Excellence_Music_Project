import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Loading from './misc-components/Loading';
const Footer = lazy(() => import('./misc-components/Footer'))
const ScrollToTop = lazy(() => import('./misc-components/ScrollToTop'))
const Games = lazy(() => import('./misc-components/Games'))
const DayInTheLifeGame = lazy(() => import('./Day-in-life-game/DayInTheLifeGame'))
const PerformersComposersRoutes = lazy(() => import('./artists-data/PerformersComposersRoutes'))
const QuizRoutes = lazy(() => import('./quizzes/QuizRoutes'))
const Navbar = lazy(() => import('./misc-components/Navbar'))
const renderLoader = () => <Loading />;
const Home = lazy(() => import('./misc-components/Home'))

const App = () => {
  return (

    <Suspense fallback={renderLoader()}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/dayinlife" exact component={DayInTheLifeGame} />
        <Route exact path="/games" component={Games} />
        <QuizRoutes />
        <PerformersComposersRoutes />
        <Footer />
      </BrowserRouter>
    </Suspense>


  );
}

export default App;
