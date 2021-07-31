import { useState } from "react";
import GameOptions from "./GameOptions";
import TourTemplate from "./TourTemplate";
import gigResponses from "./gigResponsesArray";

const GameHomePage = () => {
  const [earnings, setEarnings] = useState(0);
  const [greeting, setGreeting] = useState('What would you like to do today?');
  const [showHomePage, setShowHomePage] = useState(true);
  const [showTourPage, setShowTourPage] = useState(false);
  const [showLocalPage, setShowLocalPage] = useState(false);
  const [hideHomeBtn, setHideHomeBtn] = useState(true);

  //Tour options 
  const [showWestCoastPage, setShowWestCoastPage] = useState(false);
  const [showMidWestPage, setShowMidWestPage] = useState(false);
  const [showSouthPage, setShowSouthPage] = useState(false);
  const [showEastCoastPage, setShowEastCoastPage] = useState(false);

  //shuffle performance array responses
  const shuffle = (array) => {
    let remainingElements = array.length;
    let temp;
    let i;

    while (remainingElements) {
      i = Math.floor(Math.random() * remainingElements--);

      temp = array[remainingElements];
      array[remainingElements] = array[i];
      array[i] = temp;
    }
    const randomNum = Math.floor(Math.random() * array.length);

    return setGreeting(array[randomNum]);
  }

  const venues = () => {
    shuffle(gigResponses)
    setEarnings(earnings + 5)
  }

  const westCoastArr = [
    { location: 'Downbeat', locationFunction: venues },
    { location: 'Purcell\'s', locationFunction: venues },
    { location: 'Flamingo', locationFunction: venues },
    { location: 'Dunbar', locationFunction: venues }
  ];

  const eastCoastArr = [
    { location: 'Pearl', locationFunction: venues },
    { location: 'Alhambra', locationFunction: venues },
    { location: 'Southland', locationFunction: venues },
    { location: 'Bohemian', locationFunction: venues }
  ];
  const southArr = [
    { location: 'Saenger', locationFunction: venues },
    { location: 'Tabernacle', locationFunction: venues },
    { location: 'Douglass', locationFunction: venues },
    { location: 'Carver', locationFunction: venues }
  ];
  const midwestArr = [
    { location: 'Baker\'s Lounge', locationFunction: venues },
    { location: 'Club DeLisa', locationFunction: venues },
    { location: 'Kelly\'s Stables', locationFunction: venues },
    { location: 'Friar\'s Inn', locationFunction: venues }
  ];

  const localGigArr = [
    { location: 'Jimmy Ryan\'s', locationFunction: venues },
    { location: 'Onyx Club', locationFunction: venues },
    { location: 'Famous Door', locationFunction: venues },
    { location: 'Village Vanguard', locationFunction: venues },
  ]

  const goToWestCoast = () => {
    setGreeting('Welcome to the West Coast. Pick a venue');
    setShowWestCoastPage(true);
    setShowTourPage(false);

  }
  const goToMidWest = () => {
    setGreeting('Welcome to the Midwest. Pick a venue');
    setShowTourPage(false);
    setShowMidWestPage(true);
  }
  const gotToSouth = () => {
    setShowSouthPage(true);
    setGreeting('Welcome to the South. Pick a venue');
    setShowTourPage(false);
  }
  const goToEastCoast = () => {
    setGreeting('Welcome to the East Coast. Pick a venue');
    setShowTourPage(false);
    setShowEastCoastPage(true);
  }
  const locationsArr = [
    { location: 'West Coast', locationFunction: goToWestCoast },
    { location: 'Midwest', locationFunction: goToMidWest },
    { location: 'South', locationFunction: gotToSouth },
    { location: 'East Coast', locationFunction: goToEastCoast }

  ];

  const handleTourClick = () => {
    setGreeting('Where would you like to go?');
    setHideHomeBtn(false);
    setShowTourPage(true);
    setShowHomePage(false);
  }

  const handleLocalClick = () => {
    setGreeting('What venue would like to perform at?');
    setHideHomeBtn(false);
    setShowHomePage(false);
    setShowLocalPage(true);
  }

  const handleHomeClick = () => {
    setShowHomePage(true);
    setShowLocalPage(false);
    setShowTourPage(false);
    setHideHomeBtn(true);
    setShowWestCoastPage(false);
    setShowMidWestPage(false);
    setShowEastCoastPage(false);
    setShowSouthPage(false);
    setGreeting('What would you like to do today?');
  }


  const gameOptionCards = [
    { title: 'Tour the U.S.', description: 'Take the act on the road', btn: 'Start Tour', src: "/images/LApalmtrees.jpg", alt: 'palm trees', handleClick: handleTourClick },
    { title: 'Gig around town', description: 'Hit up the hot jazz spots in N.Y.C.', btn: 'Local gigs', src: "/images/Statue-liberty.jpg", alt: 'lady liberty', handleClick: handleLocalClick },
  ];


  const changeGameComponents = () => {
    if (showHomePage) {
      return <GameOptions gameInfo={gameOptionCards} />
    } else if (showTourPage) {
      return <TourTemplate arr={locationsArr} img="https://i.imgur.com/1wOv2p8.jpg" alt="Los Angeles Palm Trees" />
    } else if (showWestCoastPage) {
      return <TourTemplate arr={westCoastArr} img='https://i.imgur.com/PrW9mC8.jpg' alt='Los Angeles Ariel View' />
    } else if (showMidWestPage) {
      return <TourTemplate arr={midwestArr} img='https://i.imgur.com/hAjbrI3.jpg' alt='Chicago' />
    } else if (showSouthPage) {
      return <TourTemplate arr={southArr} img='https://i.imgur.com/FcbtMke.jpg' alt='Georgia Lake' />
    } else if (showEastCoastPage) {
      return <TourTemplate arr={eastCoastArr} img='https://i.imgur.com/jjr3dlz.jpg' alt='Maine Lighthouse' />
    } else if (showLocalPage) {
      return <TourTemplate arr={localGigArr} img={`${process.env.PUBLIC_URL}/images/NYC-bridge.jpg`} alt='New York City bridge' />
    }
  }


  return (
    <>
      <h2 className="my-6 text-4xl text-center">{greeting} </h2>
      <p className="my-2 text-xl text-center">Earnings: ${earnings}</p>
      {changeGameComponents()}
      {hideHomeBtn ? null :
        <div className="flex items-center	justify-center">
          <button className="px-3	 py-3 text-white bg-green-700  rounded-lg font-bold " onClick={handleHomeClick}>Return Home</button>
        </div>
      }
    </>
  )
}


export default GameHomePage;