import contemporaryClassicalComposers from '../artists-data/contemporary-classical-composers';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllClassicalContemporaryComposers = () => {
  return (
    <ArtistTemplate
      arr={contemporaryClassicalComposers}
      borderColor="border-purple-700"
      bgColor="bg-purple-700"
    />
  )
}
export default AllClassicalContemporaryComposers;