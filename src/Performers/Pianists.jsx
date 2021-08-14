import { lazy, Suspense } from 'react';
import instrumentalists from '../artists-data/instrumentalists';
import Loading from '../misc-components/Loading';
const renderLoader = () => <Loading />
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))

const AllPianists = () => {
  const pianoArr = instrumentalists.filter(musician => musician.category === 'piano');

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={pianoArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )
}
export default AllPianists;