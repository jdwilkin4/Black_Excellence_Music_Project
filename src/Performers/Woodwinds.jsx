import instrumentalists from '../artists-data/instrumentalists';
import ArtistTemplate from '../misc-components/ArtistTemplate';

const AllWoodwinds = () => {
  const woodwindsArr = instrumentalists.filter(musician => musician.category === 'woodwinds')

  return (
    <ArtistTemplate
      arr={woodwindsArr}
      borderColor="border-green-700"
      bgColor="bg-green-700"
    />
  )
}
export default AllWoodwinds;