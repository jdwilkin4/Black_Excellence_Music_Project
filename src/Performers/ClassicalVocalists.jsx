import vocalists from '../artists-data/vocalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const ClassicalVocalists = () => {
  const classicalVocalArr = vocalists.filter(musician => musician.category === 'classical');

  return (
    <ArtistTemplate
      arr={classicalVocalArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )
}
export default ClassicalVocalists;