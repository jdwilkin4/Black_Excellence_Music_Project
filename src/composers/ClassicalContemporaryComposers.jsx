import React, { useState } from 'react';
import AllClassicalContemporaryComposers from './AllClassicalContemporaryComposers';
import FemaleContemporaryComposers from './FemaleContemporaryComposers';

const ChangeCategory = (props) => {
    if (props.category === 'all') {
        return <AllClassicalContemporaryComposers />
    } else if (props.category === 'female') {
        return <FemaleContemporaryComposers />
    }
}

const ContemporaryClassicalComposers = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);

    return (
        <>
            <h1 className="text-5xl text-center my-8">Contemporary &amp; Classical Composers</h1>

            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl text-center my-2">Filter by category</h2>
                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All Composers</option>
                        <option value="female">Female Composers</option>
                    </select>
                </div>
            </div>

            <ChangeCategory category={option} />

        </>
    )
}
export default ContemporaryClassicalComposers