import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllPercussionists = () => {
  const percussionArr = instrumentalists.filter(musician => musician.category === 'percussion');

  return (
    <ArtistTemplate
      arr={percussionArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )
}
export default AllPercussionists;