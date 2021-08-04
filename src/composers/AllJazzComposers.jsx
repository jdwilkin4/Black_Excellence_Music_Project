import React, { lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'));
const renderLoader = () => <p>Loading...</p>;

const AllJazzComposers = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={jazzComposersData}
          borderColor="border-purple-700"
          bgColor="bg-purple-700"
        />
      </Suspense>
    </>
  )
}
export default AllJazzComposers;