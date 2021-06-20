import React from "react";
import contemporaryClassicalComposers from '../artists-files/contemporary-classical-composers';

const ContemporaryClassicalComposers = () => {
    return (
        <div>
            <h1>Contemporary Classical Composers</h1>

            <div>
                {contemporaryClassicalComposers.map((composer, index) => (
                    <div key={index}>
                        <a href={composer.bio} target="_blank" rel="noopener noreferrer">
                            <h3>{composer.name}</h3>
                        </a>
                        <p>{composer.tag}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default ContemporaryClassicalComposers