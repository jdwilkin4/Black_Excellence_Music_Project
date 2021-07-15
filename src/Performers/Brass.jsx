import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllBrass = () => {
  const brassPlayers = instrumentalists.filter(musician => musician.category === 'brass')

  return (
    <ArtistTemplate
      arr={brassPlayers}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )

}
export default AllBrass;