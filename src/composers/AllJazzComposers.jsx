import jazzComposersData from '../artists-data/jazz-composers';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllJazzComposers = () => {

  return (
    <ArtistTemplate
      arr={jazzComposersData}
      borderColor="border-purple-700"
      bgColor="bg-purple-700"

    />

  )
}
export default AllJazzComposers;