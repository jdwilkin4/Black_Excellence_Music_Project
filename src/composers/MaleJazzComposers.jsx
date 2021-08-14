import React, { lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <Loading />
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