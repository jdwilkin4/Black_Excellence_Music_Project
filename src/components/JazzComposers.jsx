import React, { useState } from 'react';
import AllJazzComposers from './AllJazzComposers';

const ChangeCategory = (props) => {
    if (props.category === 'all') {
        return <AllJazzComposers />
    } else if (props.category === 'female') {
        return <h2>Female</h2>
    }
}
const JazzComposersPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);

    return (
        <div>
            <h1 className="text-5xl text-center my-8 text-purple-700">Jazz Composers</h1>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl text-center my-2 text-purple-700">Filter by category</h2>
                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All Artists</option>
                        <option value="female">Female Artists</option>
                        <option value="woodwinds">Woodwind Players</option>
                        <option value="brass">Brass Players</option>
                        <option value="percussion">Percussion Players</option>
                        <option value="voice">Vocalists</option>
                        <option value="piano">Pianists</option>
                    </select>
                </div>
            </div>

            <ChangeCategory category={option} />


        </div>
    )
}
export default JazzComposersPage