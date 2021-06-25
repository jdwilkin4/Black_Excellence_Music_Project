import React, { useState } from 'react';
import AllJazzComposers from './AllJazzComposers';


const JazzComposersPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value)
    const changeOption = () => console.log(`You have picked: ${option}`)
    return (
        <div>
            <h1 className="text-5xl text-center my-8 text-purple-700">Jazz Composers</h1>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">

                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All Artists</option>
                        <option value="Female">Female Artists</option>
                        <option value="woodwinds">Woodwind Players</option>
                        <option value="brass">Brass Players</option>
                        <option value="percussion">Percussion Players</option>
                        <option value="voice">Vocalists</option>
                        <option value="piano">Pianists</option>
                    </select>

                    <div className="flex justify-center">
                        <button onClick={changeOption} className="p-2 border rounded-md bg-purple-700 text-white">Filter results</button>
                    </div>
                </div>
            </div>
            <AllJazzComposers />
        </div>
    )
}
export default JazzComposersPage