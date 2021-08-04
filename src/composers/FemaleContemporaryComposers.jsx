import React, { lazy, Suspense } from 'react';
import contemporaryClassicalComposers from '../artists-data/contemporary-classical-composers';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <p>Loading...</p>;

const FemaleContemporaryComposers = () => {

  const femaleComposerArr = contemporaryClassicalComposers.filter(composer => composer.isFemale)

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
export default FemaleContemporaryComposers;