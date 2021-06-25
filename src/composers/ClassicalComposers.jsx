import React from "react";
import contemporaryClassicalComposers from '../artists-data/contemporary-classical-composers';

const ContemporaryClassicalComposers = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-8 text-purple-700">Contemporary Classical Composers</h1>

            <div className="flex flex-row flex-wrap justify-center items-center my-2">
                {contemporaryClassicalComposers.map((composer, index) => (
                    <div key={index}>
                        <div className="my-4 border-r border-l border-b-8 border-t-8 border-purple-600 rounded-lg">
                            <div className="w-96 flex">
                                <div className="text-center w-full pt-9 pr-4">
                                    <h2 className="font-bold text-purple-700">{composer.name}</h2>
                                    <p className="py-2 text-base">{composer.tag}</p>
                                </div>
                            </div>

                            <div className="text-center my-8">
                                <a rel="noreferrer" target="_blank" href={composer.bio} className="w-1/2 px-4 py-3 text-white bg-purple-700  rounded-lg font-bold text-sm">Composer Bio</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default ContemporaryClassicalComposers