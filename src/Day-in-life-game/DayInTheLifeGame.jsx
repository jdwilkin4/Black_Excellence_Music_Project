import { useState } from 'react';
import GameHomePage from './GameHomePage';
import WelcomePage from './WelcomePage';

const DayInTheLifeGame = () => {
    const [welcomeScreen, setWelcomeScreen] = useState(true);

    const startGame = () => setWelcomeScreen(false);
    return (
        <div>
            {welcomeScreen ? <WelcomePage startBtn={startGame} /> : <GameHomePage />}

        </div>
    )
}

export default DayInTheLifeGame;