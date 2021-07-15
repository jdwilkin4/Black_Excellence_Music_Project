import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllPianists = () => {
  const pianoArr = instrumentalists.filter(musician => musician.category === 'piano');

  return (
    <ArtistTemplate
      arr={pianoArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )
}
export default AllPianists;