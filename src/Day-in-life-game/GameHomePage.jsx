import { useState } from "react";
import TourPage from "./TourPage";
import LocalPage from "./LocalPage";
import TeachingPage from "./TeachingPage";


const GameHomePage = () => {
  const [earnings, setEarnings] = useState(0);
  const [greeting, setGreeting] = useState('What would you like to do today?');
  const [showHomePage, setShowHomePage] = useState(true);
  const [showTourPage, setShowTourPage] = useState(false);
  const [showLocalPage, setShowLocalPage] = useState(false);
  const [showTeachingPage, setShowTeachingPage] = useState(false);
  const [hideHomeBtn, setHideHomeBtn] = useState(true);



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
    setGreeting('What would you like to do today?');

    return <GameOptions gameInfo={gameOptionCards} />
  }

  const gameOptionCards = [
    { title: 'Tour the U.S.', description: 'Take the act on the road', btn: 'Start Tour', src: "https://i.imgur.com/1wOv2p8.jpg", alt: 'palm trees', handleClick: handleTourClick },
    { title: 'Gig around town', description: 'Hit up the hot jazz spots in N.Y.C.', btn: 'Local gigs', src: "https://i.imgur.com/gD4G553.jpg", alt: 'lady liberty', handleClick: handleLocalClick },
    { title: 'Teaching', description: 'Teach the next jazz generation', btn: 'Go Teach', src: "https://i.imgur.com/hgLRhq0.jpg", alt: 'piano and sheet music', handleClick: handleTeachingClick },
  ];


  const changeGameComponents = () => {
    if (showHomePage) {
      return <GameOptions greeting={greeting} earnings={earnings} gameInfo={gameOptionCards} />
    } else if (showTourPage) {
      return <TourPage greeting={greeting} earnings={earnings} />
    } else if (showLocalPage) {
      return <LocalPage />
    } else if (showTeachingPage) {
      return <TeachingPage />
    }
  }


  return (
    <>
      {changeGameComponents()}
      {hideHomeBtn ? null :

        <div className="flex items-center	justify-center">
          <button className="px-3	 py-3 text-white bg-green-700  rounded-lg font-bold " onClick={handleHomeClick}>Return Home</button>
        </div>


      }

    </>
  )
}

//child components

const GameOptions = (props) => {
  return (
    <>
      <h2 className="my-6 text-4xl text-center">{props.greeting} </h2>
      <p className="my-2 text-xl text-center">Earnings: ${props.earnings}</p>
      <div className="flex  items-center flex-wrap justify-center">
        {props.gameInfo.map((options, index) => (

          <div key={index} className="p-4 relative">
            <div className=" border-2 border-purple-700	rounded-lg shadow px-8 py-2 pt-4">

              <h2 className="text-2xl text-center mb-4 font-bold"> {options.title} </h2>
              <img alt={options.alt} src={options.src} className="mx-auto object-cover rounded-lg h-40 w-40 " />

              <p className="text-md text-center  w-60  mx-auto py-4">{options.description} </p>
              <div className="flex justify-center	 items-center	">
                <button onClick={options.handleClick} className="w-9/12  py-3 text-white bg-green-700  rounded-lg font-bold ">{options.btn}</button>
              </div>
            </div>
          </div>

        ))}
      </div>
    </>

  )
}


export default GameHomePage;