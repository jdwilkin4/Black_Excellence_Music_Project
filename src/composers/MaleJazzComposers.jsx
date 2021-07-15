import jazzComposersData from '../artists-data/jazz-composers';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const MaleJazzComposers = () => {

    const maleComposerArr = jazzComposersData.filter(composer => !composer.isFemale)

    return (
        <ArtistTemplate
            arr={maleComposerArr}
            borderColor="border-green-700"
            bgColor="bg-green-700"

        />

    )
}
export default MaleJazzComposers;