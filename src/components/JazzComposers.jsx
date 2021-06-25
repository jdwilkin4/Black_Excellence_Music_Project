import React, { useState } from 'react';
import AllJazzComposers from './AllJazzComposers';
import FemaleJazzComposers from './FemaleJazzComposers';
import MaleJazzComposers from './MaleJazzComposers';

const ChangeCategory = (props) => {
    if (props.category === 'all') {
        return <AllJazzComposers />
    } else if (props.category === 'female') {
        return <FemaleJazzComposers />
    } else if (props.category === 'male') {
        return <MaleJazzComposers />
    }
}
const JazzComposersPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);

    return (
        <div>
            <h1 className="text-5xl text-center my-8 ">Jazz Composers</h1>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl text-center my-2">Filter by category</h2>
                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All Jazz Composers</option>
                        <option value="female">Female Composers</option>
                        <option value="male">Male Composers</option>
                    </select>
                </div>
            </div>

            <ChangeCategory category={option} />


        </div>
    )
}
export default JazzComposersPage