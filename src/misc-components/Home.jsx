import { Link } from "react-router-dom";
import D3PieChart from "./D3PieChart";
import quizCards from "../quizzes/quiz-cards";

const Home = () => {
  const quizCardArr = quizCards.slice(4, 8);
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
          <img className="inline-block h-60 w-60 rounded-full object-cover ring-2 ring-white" src="https://www.wrti.org/sites/wrti/files/styles/x_large/public/201703/EllaFitzgerald923px.jpg" alt="Ella Fitzgerald" />
          <img className="inline-block h-60 w-60 rounded-full object-cover ring-2 ring-white" src="https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/7/b3/7b38444d-ce60-5ca9-b3b3-1235ec5498a7/57518c10ab93c.image.jpg?crop=743%2C743%2C0%2C123&resize=1200%2C1200&order=crop%2Cresize" alt="Terrance Blanchard" />
          <img className="inline-block h-60 w-60 rounded-full object-cover ring-2 ring-white" src="https://cdn.michiganopera.org/20210303111250/Margaret-Bonds-722.jpg" alt="Margaret Bonds" />
          <img className="inline-block h-60 w-60 rounded-full object-cover ring-2 ring-white" src="https://lcweb2.loc.gov/diglib/ihas/html/images/nathaniel-dett.jpg" alt="Robert Nathaniel Dett" />
        </div>
      </div>
      <div className="w-full text-center">
        <h2 className="mt-14 text-5xl font-bold ">Lack of representation</h2>
        <h3 className="w-full my-2 text-3xl font-bold  text-center text-gray-800">Black Musicians in American Orchestras only make up 1.8%</h3>
        <h3 className="w-full my-2 text-2xl font-bold  text-center text-gray-800">Change can only happen through education and action</h3>

        <cite>Data provided by League of American Orchestras</cite>
        <div className="flex -my-6  justify-center">
          <D3PieChart innerRadius={0} outerRadius={200} />
        </div>
      </div>

      <section className="border-b">
        <div className="container max-w-5xl mx-auto m-2">
          <h2 className="mt-14 text-5xl font-bold ">
            Explore black artists from past and present
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-4xl text-gray-800 font-bold leading-none my-6">
                Contemporary Composers
              </h3>
              <p className="text-gray-600 text-3xl mt-12">
                Learn about Michael Abels, Eleanor Alberga, William Levi Dawson, Tania Justina León, and more!
                <div className="mt-12">
                  <Link className="w-1/2 px-4 py-6 text-white bg-green-700 rounded-lg  font-bold text-xl" to="/contemporary-composers">Contemporary Composers</Link>
                </div>
              </p>
            </div>
            <div className=" rounded-lg sm:w-1/2 p-6">
              <img className=" w-full h-5/6 rounded-lg" src="https://www.musicunitesjamaica.com/uploads/1/2/2/5/12251498/published/alberga-eleanor-c-keith-saunders-arenapal.jpg?1484700784" alt="Eleanor Alberga" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className=" w-full h-5/6 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Duke_Ellington_-_publicity.JPG/220px-Duke_Ellington_-_publicity.JPG" alt="Duke Ellington" />
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-4xl text-gray-800 font-bold leading-none my-6">
                Jazz Composers
              </h3>
              <p className="text-gray-600 text-3xl mt-12">
                Learn about Lillian Hardin Armstrong, Terence Oliver Blanchard,  Irene Kitchings, "Duke" Ellington, and more!
                <div className="mt-12">
                  <Link className="w-1/2 px-4 py-6 text-white bg-green-700 rounded-lg  font-bold text-2xl" to="/jazz-composers">Jazz Composers Page</Link>
                </div>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-4xl text-gray-800 font-bold leading-none my-6">
                Instrumentalists
              </h3>
              <p className="text-gray-600 text-3xl mt-12">
                Learn about Ray Charles, Valerie Coleman, Lamar Carey Curtis, Diedre Murray and more!
                <div className="mt-12">
                  <Link className="w-1/2 px-4 py-6 text-white bg-green-700 rounded-lg  font-bold text-2xl" to="/instrumentalists">Instrumentalists Page</Link>
                </div>
              </p>
            </div>
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className="w-full h-5/6 rounded-lg" src="https://images.pulsewebcontent.com/photos/2018/06_Jun/800/RayCharles_6_15.jpg" alt="Ray Charles" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="rounded-lg sm:w-1/2 p-6">
              <img className=" w-full h-5/6 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Dinah_Washington_1962.jpg/220px-Dinah_Washington_1962.jpg" alt="Dinah Washington" />
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-4xl text-gray-800 font-bold leading-none my-6">
                Vocalists
              </h3>
              <p className="text-gray-600 text-3xl mt-12">
                Learn about Adele Addison, Nat King Cole,  Dinah Washington,  Gregory Porter, and more!
                <div className="mt-12">
                  <Link className="w-1/2 px-4 py-6 text-white bg-green-700 rounded-lg  font-bold text-2xl" to="/vocalists">Vocalists Page</Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="min-w-screen min-h-screen -mt-20 bg-gray-100 px-5 py-5">
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
            <p className="mt-4 text-gray-600 dark:text-gray-300">Explore what it is like to be a 1930's jazz pianist.</p>
            <div className="mt-6">
              <Link className="w-1/2 py-2 px-2 text-white bg-green-700 rounded-lg text-center text-2xl font-bold" to="/dayinlife">Day in The Life Page</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://i.imgur.com/epWr8mg.jpg" alt="New York City" />
        </div>
      </div>

      {/*   


    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              LANDING
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="https://www.freepik.com/free-photos-vectors/background" className="text-gray-500">Background vector created by freepik - www.freepik.com</a>
    </footer> */}
    </ >


  )
}
export default Home;



