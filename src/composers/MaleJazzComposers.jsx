import React, { lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <p>Loading...</p>
const MaleJazzComposers = () => {

    const maleComposerArr = jazzComposersData.filter(composer => !composer.isFemale)

    return (
        <>
            <Suspense fallback={renderLoader()}>
                <ArtistTemplate
                    arr={maleComposerArr}
                    borderColor="border-green-700"
                    bgColor="bg-green-700"

                />
            </Suspense>
        </>

    )
}
export default MaleJazzComposers;