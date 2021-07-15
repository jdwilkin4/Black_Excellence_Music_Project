import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllPerformers = () => {
  return (
    <ArtistTemplate
      arr={instrumentalists}
      borderColor="border-purple-700"
      bgColor="bg-purple-700"
    />
  )
}
export default AllPerformers;