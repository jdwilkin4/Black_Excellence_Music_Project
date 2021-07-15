import contemporaryClassicalComposers from '../artists-data/contemporary-classical-composers';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const FemaleContemporaryComposers = () => {

  const femaleComposerArr = contemporaryClassicalComposers.filter(composer => composer.isFemale)

  return (
    <ArtistTemplate
      arr={femaleComposerArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />

  )
}
export default FemaleContemporaryComposers;