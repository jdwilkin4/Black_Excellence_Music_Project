import { lazy, Suspense } from 'react';
import vocalists from '../artists-data/vocalists';
import Loading from '../misc-components/Loading';
const renderLoader = () => <Loading />
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))

const JazzVocalists = () => {
  const jazzVocalArr = vocalists.filter(musician => musician.category === 'jazz');

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={jazzVocalArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )

}
export default JazzVocalists;
