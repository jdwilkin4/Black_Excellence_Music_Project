import React, { lazy, Suspense } from 'react';
import Loading from '../misc-components/Loading';
import contemporaryClassicalComposers from '../artists-data/contemporary-classical-composers';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'));
const renderLoader = () => <Loading />;

const AllClassicalContemporaryComposers = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={contemporaryClassicalComposers}
          borderColor="border-purple-700"
          bgColor="bg-purple-700"
        />
      </Suspense>

    </>

  )
}
export default AllClassicalContemporaryComposers;