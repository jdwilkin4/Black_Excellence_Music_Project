import vocalists from '../artists-data/vocalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllVocalists = () => {
  return (
    <ArtistTemplate
      arr={vocalists}
      borderColor="border-purple-700"
      bgColor="bg-purple-700"
    />
  )
}
export default AllVocalists;