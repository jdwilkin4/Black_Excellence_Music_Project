import React, { useState } from 'react';
import AllPerformers from './AllPerformers';

const InstrumentalistPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);


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
                        <option value="brass">Percussion</option>
                        <option value="brass">Piano</option>
                    </select>
                </div>
            </div>
            <AllPerformers />
        </div>

    )
}
export default InstrumentalistPage