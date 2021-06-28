import React, { useState } from 'react';
import AllVocalists from './AllVocalists';
import JazzVocalists from './JazzVocalists';
import ClassicalVocalists from './ClassicalVocalists';

const VocalistsPage = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value);

    const ChangeCategory = (props) => {
        if (props.category === 'all') {
            return <AllVocalists />
        } else if (props.category === 'jazz') {
            return <JazzVocalists />
        } else if (props.category === 'classical') {
            return <ClassicalVocalists />
        }
    }

    return (
        <div>
            <h1 className="text-5xl text-center my-8 ">Vocalists</h1>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl text-center my-2">Filter by category</h2>
                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All</option>
                        <option value="jazz">Jazz Vocalists</option>
                        <option value="classical">Classical Vocalists</option>
                    </select>
                </div>
            </div>
            <ChangeCategory category={option} />

        </div>

    )
}
export default VocalistsPage;