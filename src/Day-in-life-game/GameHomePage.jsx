import { useState } from "react";



const GameHomePage = () => {
  const [earnings, setEarnings] = useState(0);
  const [greeting, setGreeting] = useState('What would you like to do today?');
  const [showHomePage, setShowHomePage] = useState(true);

  const gameOptions = [
    { title: 'Tour the U.S.', description: 'Take the act on the road', btn: 'Start Tour', src: "https://i.imgur.com/1wOv2p8.jpg" },
    { title: 'Gig around town', description: 'Hit up the hot jazz spots in N.Y.C.', btn: 'Local gigs', src: "https://i.imgur.com/1wOv2p8.jpg" },
    { title: 'Teaching', description: 'Teach the next jazz generation', btn: 'Go Teach', src: "https://i.imgur.com/1wOv2p8.jpg" },

  ]

  return (
    <>

      <h2 className="text-3xl  text-center">{greeting} ${earnings}</h2>

      <div className="flex  items-center flex-wrap justify-center">
        {gameOptions.map((options, index) => (

          <div key={index} className="p-4 relative">
            <div className=" border-2 border-purple-700	rounded-lg shadow px-8 py-2 pt-4">

              <h2 className="text-2xl text-center mb-4 font-bold"> {options.title} </h2>
              <img alt="LA palm trees" src={options.src} className="mx-auto object-cover rounded-lg h-40 w-40 " />

              <p className="text-md text-center  w-60  mx-auto py-4">{options.description} </p>
              <div className="flex justify-center	 items-center	">
                <button className="w-9/12  py-3 text-white bg-green-700  rounded-lg font-bold ">{options.btn}</button>
              </div>
            </div>
          </div>

        ))}
      </div>


    </>
  )
}


export default GameHomePage;