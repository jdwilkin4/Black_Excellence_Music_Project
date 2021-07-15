import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllStrings = () => {
  const stringPlayersArr = instrumentalists.filter(musician => musician.category === 'strings');

  return (
    <ArtistTemplate
      arr={stringPlayersArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )
}
export default AllStrings;