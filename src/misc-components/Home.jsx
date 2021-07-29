import { Link } from "react-router-dom";
import D3PieChart from "./D3PieChart";
import quizCards from "../quizzes/quiz-cards";

const Home = () => {
  const quizCardArr = quizCards.slice(4, 7);
  const roundedImage = "inline-block h-60 w-60 rounded-full object-cover ring-2 ring-white";
  const d3H3Text = "w-full my-2 text-3xl text-center"
  const h3Text = "text-4xl leading-none my-6"
  const paraText = "text-xl mt-12"
  const linkStyles = "w-1/2 px-4 py-6 text-white bg-green-700 rounded-lg ";
  const sectionImgs = "hidden md:block lg:block w-full h-5/6 rounded-lg";
  return (
    <>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full justify-center  text-center ">
          <h1 className="my-4 text-6xl font-bold leading-tight">
            Black Excellence Music Project
          </h1>
          <p className="leading-normal text-3xl mb-8">
            Learn. Explore. Celebrate.
          </p>
        </div>
        <div className="flex-wrap w-full justify-center py-6 text-center flex -space-x-2">
          <img className={roundedImage} src={process.env.PUBLIC_URL + "/images/EllaFitzgerald923px.jpg"} alt="Ella Fitzgerald" />
          <img className={roundedImage} src={process.env.PUBLIC_URL + '/images/Terrance-Blanchard.jpg'} alt="Terrance Blanchard" />
          <img className={roundedImage} src={process.env.PUBLIC_URL + "/images/Margaret-Bonds-722.jpg"} alt="Margaret Bonds" />
          <img className={roundedImage} src={process.env.PUBLIC_URL + "/images/nathaniel-dett.jpg"} alt="Robert Nathaniel Dett" />
        </div>
      </div>
      <div className="w-full text-center">
        <h2 className="mt-14 mb-12 text-5xl font-bold ">Lack of Diversity</h2>
        <h3 className={d3H3Text}>Black Musicians in American Orchestras only make up <span className="font-bold">1.8%</span></h3>

        <cite>Data provided by League of American Orchestras</cite>
        <div className="flex -my-6  justify-center">
          <D3PieChart innerRadius={0} outerRadius={200} />
        </div>
      </div>

      <section className="border-b">
        <div className="container max-w-5xl mx-auto m-2">
          <h2 className="mt-14 text-5xl font-bold text-center ">
            Explore black artists
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className={h3Text}>
                Contemporary Composers
              </h3>
              <p className={paraText}>
                Learn about Michael Abels, Eleanor Alberga, William Levi Dawson, Tania Justina León, and more!
                <div className="mt-12">
                  <Link className={linkStyles} to="/contemporary-composers">Contemporary Composers</Link>
                </div>
              </p>
            </div>
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className={sectionImgs} src={process.env.PUBLIC_URL + "/images/piano1.jpg"} alt="Piano" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className={sectionImgs} src={process.env.PUBLIC_URL + "/images/jazzsax1.jpg"} alt="Unknown jazz saxophonist" />
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className={h3Text}>
                Jazz Composers
              </h3>
              <p className={paraText}>
                Learn about Lillian Hardin Armstrong, Terence Oliver Blanchard,  Irene Kitchings, "Duke" Ellington, and more!
                <div className="mt-12">
                  <Link className={linkStyles} to="/jazz-composers">Jazz Composers Page</Link>
                </div>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className={h3Text}>
                Instrumentalists
              </h3>
              <p className={paraText}>
                Learn about Ray Charles, Valerie Coleman, Lamar Carey Curtis, Diedre Murray and more!
                <div className="mt-12">
                  <Link className={linkStyles} to="/instrumentalists">Instrumentalists Page</Link>
                </div>
              </p>
            </div>
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className={sectionImgs} src={process.env.PUBLIC_URL + "/images/drummer1.jpg"} alt="Unknown Drummer" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className={sectionImgs} src={process.env.PUBLIC_URL + "/images/vocalist1.jpg"} alt="Vocal silhouette" />
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className={h3Text}>
                Vocalists
              </h3>
              <p className={paraText}>
                Learn about Adele Addison, Nat King Cole,  Dinah Washington,  Gregory Porter, and more!
                <div className="mt-12">
                  <Link className={linkStyles} to="/vocalists">Vocalists Page</Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="min-w-screen min-h-screen -mt-20 px-5 py-5">
        <div className="w-full mx-auto bg-white px-5 py-10 text-black-600 mb-10">
          <div className="text-center max-w-xl mx-auto">
            <h2 className=" text-5xl font-bold">Take Quizzes</h2>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center my-2">
          {quizCardArr.map((artist, index) => (

            <div key={index} className="mx-4 mb-4 border-r border-l border-b-8 border-t-8 border-purple-700 rounded-lg p-8  justify-between leading-normal">
              <div className="w-56 text-center mb-2">
                <h2 className="text-black font-bold text-lg mb-2">{artist.name}</h2>
                <div className="photo-wrapper p-2">
                  <img className="w-40 h-40 rounded-full mx-auto" src={artist.image} alt={artist.alt} />
                </div>
              </div>
              <div className="text-center mt-4 mb-8">
                <a rel="noreferrer" target="_blank" href={artist.bio} className="w-1/2 px-4 py-3 text-white bg-purple-700  rounded-lg font-bold text-sm">{artist.name} Bio</a>
              </div>
              <div className="text-center">
                <Link to={artist.quiz} className="w-1/2 px-4 py-3 text-white bg-green-700  rounded-lg font-bold text-sm">Take quiz</Link>
              </div>
            </div>

          ))}
        </div>
      </div>

      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">

          <div className="max-w-lg md:mx-12 md:order-2">
            <h2 className="text-center text-5xl font-bold">Day in the Life Game</h2>
            <p className="text-xl mt-12">Explore what it is like to be a 1930's jazz pianist.</p>
            <p className="text-xl mb-12">Tour the U.S. and perform in all the top jazz clubs.</p>
            <div className="mt-6">
              <Link className={linkStyles} to="/dayinlife">Day in The Life Page</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src={process.env.PUBLIC_URL + "/images/New york city.jpg"} alt="New York City" />
        </div>
      </div>
    </ >
  )
}

export default Home;



