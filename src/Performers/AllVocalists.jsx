import { lazy, Suspense } from 'react';
import vocalists from '../artists-data/vocalists';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <Loading />

const AllVocalists = () => {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={vocalists}
          borderColor="border-purple-700"
          bgColor="bg-purple-700"
        />
      </Suspense>
    </>
  )
}
export default AllVocalists;