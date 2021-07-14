import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navLinkStyles = 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    < >

      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <Link className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
              BEMP
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }

          >
            <div className="flex flex-col lg:flex-row  ml-auto">

              <Link className={navLinkStyles} to="/contemporary-composers">
                Contemporary/Classical Composers
              </Link>


              <a className={navLinkStyles} href="#pablo">
                Jazz Composers
                                </a>

              <a className={navLinkStyles} href="#pablo">
                Setting
                                </a>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}



export default Navbar

/*

    <Link className={navLinkStyles} to="/contemporary-composers">
                Contemporary/Classical Composers
              </Link>

            <Link className="underline text-blue-400" to="/contemporary-composers">Contemporary/Classical Composers</Link>
            <br />
            <Link className="underline text-blue-400" to="/jazz-composers">Jazz Composers</Link>
            <br />
            <Link className="underline text-blue-400" to="/instrumentalists">Instrumentalists</Link>
            <br />
            <Link className="underline text-blue-400" to="/vocalists">Vocalists</Link>
            <br />
            <Link className="underline text-blue-400" to="/quizzes">Quizzes</Link>

            const [navbarOpen, setNavbarOpen] = useState(false);
                  <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
               <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
            */