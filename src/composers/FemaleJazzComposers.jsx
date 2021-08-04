import React, { lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
const renderLoader = () => <p>Loading...</p>;
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))

const FemaleJazzComposers = () => {

  const femaleComposerArr = jazzComposersData.filter(composer => composer.isFemale)

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={femaleComposerArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )
}
export default FemaleJazzComposers;