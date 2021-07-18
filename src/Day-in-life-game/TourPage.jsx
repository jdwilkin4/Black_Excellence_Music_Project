import { useState } from "react";
import GameOptionsTemplate from "./GameOptionsTemplate";

const TourPage = (props) => {
  const [showTourHomePage, setShowTourHomePage] = useState(true);
  const [showWestCoastPage, setShowWestCoastPage] = useState(false);
  const [showMidWestPage, setShowMidWestPage] = useState(false);
  const [showSouthPage, setShowSouthPage] = useState(false);
  const [showEastCoastPage, setShowEastCoastPage] = useState(false);

  const tourImages = [
    { img: 'https://i.imgur.com/FcbtMke.jpg', alt: 'Georgia Lake' },
    { img: 'https://i.imgur.com/PrW9mC8.jpg', alt: 'Los Angeles Ariel View' },
    { img: 'https://i.imgur.com/jjr3dlz.jpg', alt: 'Maine Lighthouse' },
    { img: 'https://i.imgur.com/hAjbrI3.jpg', alt: 'Chicago' }
  ];


  const westCoastArr = [
    { location: 'Downbeat' },
    { location: 'Purcell\'s' },
    { location: 'Flamingo' },
    { location: 'Dunbar' }
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
      return <GameOptionsTemplate arr={locationsArr} img="https://i.imgur.com/1wOv2p8.jpg" alt="Los Angeles Palm Trees" />
    } else if (showWestCoastPage) {
      return <GameOptionsTemplate arr={westCoastArr} img='https://i.imgur.com/PrW9mC8.jpg' alt='Los Angeles Ariel View' />
    }
  }

  return (
    <>
      <h2 className="my-6 text-4xl text-center">{props.greeting} </h2>
      <p className="my-2 text-xl text-center">Earnings: ${props.earnings}</p>
      {TourComponents()}
    </>



  )

}
export default TourPage;