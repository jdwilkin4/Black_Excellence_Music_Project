import { useState } from 'react';
import GameHomePage from './GameHomePage';
import WelcomePage from './WelcomePage';

const DayInTheLifeGame = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  const startGame = () => setWelcomeScreen(false);
  return (
    <div>
      <h1 className="text-5xl text-center my-8 ">Day in the Life Game</h1>

      {welcomeScreen ? <WelcomePage startBtn={startGame} /> : <GameHomePage />}

    </div>
  )
}

export default DayInTheLifeGame;