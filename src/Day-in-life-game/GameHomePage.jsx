import { useState } from "react";
import TourPage from "./TourPage";
import LocalPage from "./LocalPage";
import TeachingPage from "./TeachingPage";
import GameOptions from "./GameOptions";
import TourTemplate from "./TourTemplate";
import gigResponses from "./gigResponsesArray";

const GameHomePage = () => {
  const [earnings, setEarnings] = useState(0);
  const [greeting, setGreeting] = useState('What would you like to do today?');
  const [showHomePage, setShowHomePage] = useState(true);
  const [showTourPage, setShowTourPage] = useState(false);
  const [showLocalPage, setShowLocalPage] = useState(false);
  const [showTeachingPage, setShowTeachingPage] = useState(false);
  const [hideHomeBtn, setHideHomeBtn] = useState(true);

  //Tour options 
  const [showTourHomePage, setShowTourHomePage] = useState(true);
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

  const tourImages = [
    { img: 'https://i.imgur.com/FcbtMke.jpg', alt: 'Georgia Lake' },
    { img: 'https://i.imgur.com/PrW9mC8.jpg', alt: 'Los Angeles Ariel View' },
    { img: 'https://i.imgur.com/jjr3dlz.jpg', alt: 'Maine Lighthouse' },
    { img: 'https://i.imgur.com/hAjbrI3.jpg', alt: 'Chicago' }
  ];

  const westCoastVenues = () => {
    shuffle(gigResponses)
    setEarnings(earnings + 5)
  }


  const westCoastArr = [
    { location: 'Downbeat', locationFunction: westCoastVenues },
    { location: 'Purcell\'s', locationFunction: westCoastVenues },
    { location: 'Flamingo', locationFunction: westCoastVenues },
    { location: 'Dunbar', locationFunction: westCoastVenues }
  ];

  const goToWestCoast = () => {
    setShowWestCoastPage(true);
    setShowTourHomePage(false);

  }
  const goToMidWest = () => {
    setShowMidWestPage(true);
    setShowTourHomePage(false);
  }
  const gotToSouth = () => {
    setShowSouthPage(true);
    setShowTourHomePage(false);
  }
  const goToEastCoast = () => {
    setShowEastCoastPage(true);
    setShowTourHomePage(false);
  }
  const locationsArr = [
    { location: 'West Coast', locationFunction: goToWestCoast },
    { location: 'MidWest', locationFunction: goToMidWest },
    { location: 'South', locationFunction: gotToSouth },
    { location: 'East Coast', locationFunction: goToEastCoast }

  ];

  const TourComponents = () => {
    if (showTourHomePage) {
      return <TourTemplate arr={locationsArr} img="https://i.imgur.com/1wOv2p8.jpg" alt="Los Angeles Palm Trees" />
    } else if (showWestCoastPage) {
      return <TourTemplate arr={westCoastArr} img={tourImages[1].img} alt={tourImages[1].alt} />
    }
  }

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

  const handleTeachingClick = () => {
    setGreeting('Where would you like to teach today?');
    setHideHomeBtn(false);
    setShowTeachingPage(true);
    setShowHomePage(false);
  }

  const handleHomeClick = () => {
    setShowHomePage(true);
    setShowLocalPage(false);
    setShowTeachingPage(false);
    setShowTourPage(false);
    setHideHomeBtn(true);
    setShowWestCoastPage(false);
    setGreeting('What would you like to do today?');
  }

  const gameOptionCards = [
    { title: 'Tour the U.S.', description: 'Take the act on the road', btn: 'Start Tour', src: "https://i.imgur.com/1wOv2p8.jpg", alt: 'palm trees', handleClick: handleTourClick },
    { title: 'Gig around town', description: 'Hit up the hot jazz spots in N.Y.C.', btn: 'Local gigs', src: "https://i.imgur.com/gD4G553.jpg", alt: 'lady liberty', handleClick: handleLocalClick },
    { title: 'Teaching', description: 'Teach the next jazz generation', btn: 'Go Teach', src: "https://i.imgur.com/hgLRhq0.jpg", alt: 'piano and sheet music', handleClick: handleTeachingClick },
  ];


  const changeGameComponents = () => {
    if (showHomePage) {
      return <GameOptions gameInfo={gameOptionCards} />
    } else if (showTourPage) {
      return <TourPage tourComponents={TourComponents()} />
    } else if (showLocalPage) {
      return <LocalPage />
    } else if (showTeachingPage) {
      return <TeachingPage />
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