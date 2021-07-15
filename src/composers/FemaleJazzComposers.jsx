import jazzComposersData from '../artists-data/jazz-composers';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const FemaleJazzComposers = () => {

  const femaleComposerArr = jazzComposersData.filter(composer => composer.isFemale)

  return (
    <ArtistTemplate
      arr={femaleComposerArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />

  )
}
export default FemaleJazzComposers;