import { lazy, Suspense } from 'react';
import instrumentalists from '../artists-data/instrumentalists';
import Loading from '../misc-components/Loading';
const renderLoader = () => <Loading />;
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))

const AllWoodwinds = () => {
  const woodwindsArr = instrumentalists.filter(musician => musician.category === 'woodwinds')

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={woodwindsArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )
}
export default AllWoodwinds;