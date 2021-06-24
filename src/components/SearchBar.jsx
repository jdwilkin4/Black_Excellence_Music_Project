import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <div class="container mx-auto flex justify-center items-center p-2 md:p-0">
                <div class="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">

                    <select class="border border-purple-300 p-2 rounded">
                        <option>Filter by gender</option>
                        <option>Female Artists</option>
                        <option>Male Artists</option>
                    </select>

                    <select class="border border-purple-300 p-2 rounded">
                        <option>Filter by instrument category</option>
                        <option>Woodwinds</option>
                        <option>Brass</option>
                        <option>Percussion</option>
                        <option>Voice</option>
                        <option>Piano</option>
                    </select>

                    <div className="max-w-full flex justify-center" >
                        <input
                            type="text"
                            placeholder="Search for artist..."
                            class="border-purple-300 grid grid-cols-2 gap-2 border p-2 rounded"
                        />
                    </div>

                    <div class="flex justify-center">
                        <button class="p-2 border rounded-md bg-purple-700 text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar