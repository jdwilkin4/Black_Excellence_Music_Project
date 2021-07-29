
const WelcomePage = (props) => {
  return (
    <>
      <h1 className="text-5xl text-center my-8 ">Day in the Life Game</h1>

      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <img className="h-80 w-full hidden lg:block lg:w-1/2  rounded-l-lg" src={process.env.PUBLIC_URL + "/images/New york city.jpg"} alt="New York City" />

            <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none">

              <h2 className="my-2 pt-4 text-2xl text-center">Welcome to 1930's New York City</h2>
              <p className="my-6 pt-4 text-xl  text-center"> Experience what is was like to be a young black jazz pianist in 1930's America. </p>
              <p className="my-6 pt-4 text-xl  text-center">But be careful, the road to the top is not all fun and games.</p>
              <button
                onClick={props.startBtn}
                className="w-full px-4 py-2 font-bold text-white bg-purple-700 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </>




  )
}
export default WelcomePage;