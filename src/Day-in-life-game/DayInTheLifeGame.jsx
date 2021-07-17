import { useState } from 'react';
import GameHomePage from './GameHomePage';
import WelcomePage from './WelcomePage';

const DayInTheLifeGame = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  const startGame = () => setWelcomeScreen(false);
  return (
    <>

      {welcomeScreen ? <WelcomePage startBtn={startGame} /> : <GameHomePage />}

    </>
  )
}

export default DayInTheLifeGame;