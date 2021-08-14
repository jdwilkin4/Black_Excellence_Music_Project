import React, { lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'));
const renderLoader = () => <Loading />;

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