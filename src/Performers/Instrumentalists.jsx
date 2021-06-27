import React, { useState } from 'react';
import AllPerformers from './AllPerformers';
import Woodwinds from './Woodwinds';
import AllBrass from './Brass';
import AllStrings from './Strings';


const InstrumentalistPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);

    const ChangeCategory = (props) => {
        if (props.category === 'all') {
            return <AllPerformers />
        } else if (props.category === 'woodwinds') {
            return <Woodwinds />
        } else if (props.category === 'brass') {
            return <AllBrass />
        } else if (props.category === 'strings') {
            return <AllStrings />
        }
    }
    return (
        <div>
            <h1 className="text-5xl text-center my-8 ">Instrumentalists</h1>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl text-center my-2">Filter by category</h2>
                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All</option>
                        <option value="woodwinds">Woodwinds</option>
                        <option value="brass">Brass</option>
                        <option value="strings">Strings</option>
                        <option value="percussion">Percussion</option>
                        <option value="piano">Piano</option>
                    </select>
                </div>
            </div>

            <ChangeCategory category={option} />
        </div>

    )
}
export default InstrumentalistPage