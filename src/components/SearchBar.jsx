import React, { useState } from 'react';

const SearchBar = () => {
    const [option, setOption] = useState('all');
    const handleChange = (e) => setOption(e.target.value)
    const changeOption = () => console.log(`You have picked: ${option}`)
    const resetOption = () => {
        setOption('all')
        console.log(`You have reset to: ${option}`)
    }

    return (
        <div>
            <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">

                    <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
                        <option value="all">All Artists</option>
                        <option value="Female">Female Artists</option>
                        <option value="woodwinds">Woodwinds</option>
                        <option value="brass">Brass</option>
                        <option value="percussion">Percussion</option>
                        <option value="voice">Voice</option>
                        <option value="piano">Piano</option>
                    </select>

                    <div className="flex justify-center">
                        <button onClick={changeOption} className="p-2 border rounded-md bg-purple-700 text-white">Search</button>
                        <button onClick={resetOption} className="p-2 border rounded-md bg-purple-700 text-white">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar