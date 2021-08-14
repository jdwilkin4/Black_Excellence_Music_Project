import { lazy, Suspense } from 'react';
import vocalists from '../artists-data/vocalists';
import Loading from '../misc-components/Loading';
const renderLoader = () => <Loading />
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))

const ClassicalVocalists = () => {
  const classicalVocalArr = vocalists.filter(musician => musician.category === 'classical');

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={classicalVocalArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )
}
export default ClassicalVocalists;