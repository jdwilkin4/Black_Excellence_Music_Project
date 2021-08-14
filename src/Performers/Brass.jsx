import { lazy, Suspense } from 'react';
import instrumentalists from '../artists-data/instrumentalists';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'))
const renderLoader = () => <Loading />

const AllBrass = () => {
  const brassPlayers = instrumentalists.filter(musician => musician.category === 'brass')

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <ArtistTemplate
          arr={brassPlayers}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      </Suspense>
    </>
  )

}
export default AllBrass;