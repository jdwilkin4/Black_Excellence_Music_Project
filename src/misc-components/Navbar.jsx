import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div >

            <Link className="underline text-blue-400" to="/contemporary-composers">Contemporary/Classical Composers</Link>
            <br />
            <Link className="underline text-blue-400" to="/jazz-composers">Jazz Composers</Link>
            <br />
            <Link className="underline text-blue-400" to="/instrumentalists">Instrumentalists</Link>
            <br />
            <Link className="underline text-blue-400" to="/vocalists">Vocalists</Link>

        </div>
    )
}
export default Navbar