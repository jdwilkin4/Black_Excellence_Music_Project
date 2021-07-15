import vocalists from '../artists-data/vocalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const JazzVocalists = () => {
  const jazzVocalArr = vocalists.filter(musician => musician.category === 'jazz');

  return (
    <ArtistTemplate
      arr={jazzVocalArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )

}
export default JazzVocalists;
