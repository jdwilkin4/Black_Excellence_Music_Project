import { lazy, Suspense } from 'react';
import instrumentalists from '../artists-data/instrumentalists';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <Loading />

const AllPerformers = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={instrumentalists}
          borderColor="border-purple-700"
          bgColor="bg-purple-700"
        />
      </Suspense>
    </>
  )
}
export default AllPerformers;