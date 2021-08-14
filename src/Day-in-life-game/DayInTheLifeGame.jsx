import { lazy, Suspense, useState } from 'react';
import Loading from '../misc-components/Loading';
const GameHomePage = lazy(() => import('./GameHomePage'))
const WelcomePage = lazy(() => import('./WelcomePage'))

const renderLoader = () => <Loading />;

const DayInTheLifeGame = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const startGame = () => setWelcomeScreen(false);

  return (
    <>
      <Suspense fallback={renderLoader()}>
        {welcomeScreen ? <WelcomePage startBtn={startGame} /> : <GameHomePage />}
      </Suspense>
    </>
  )
}

export default DayInTheLifeGame;