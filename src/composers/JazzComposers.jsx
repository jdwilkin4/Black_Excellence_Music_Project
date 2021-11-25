import React, { useState, lazy, Suspense } from 'react';
import jazzComposersData from '../artists-data/jazz-composers';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'));
const renderLoader = () => <Loading />;
const femaleComposerArr = jazzComposersData.filter(composer => composer.isFemale)


const ChangeCategory = ({ category }) => {
  return (
    <Suspense fallback={renderLoader()}>
      {category === "all" ? (
        <>
          <ArtistTemplate
            arr={jazzComposersData}
            borderColor="border-purple-700"
            bgColor="bg-purple-700"
          />
        </>)
        : (
          <>
            <ArtistTemplate
              arr={femaleComposerArr}
              borderColor="border-green-700"
              bgColor="bg-green-700"
            />
          </>
        )}
    </Suspense>

  )

}
const JazzComposersPage = () => {
  const [option, setOption] = useState('all');
  const handleChange = (e) => setOption(e.target.value);
  const values = ["all", "female"];

  return (
    <div>
      <h1 className="text-5xl text-center my-8 ">Jazz Composers</h1>
      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center my-2">Filter by category</h2>
          <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
            {values.map((val, index) => (
              <option key={index} value={val}>{val.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      <ChangeCategory category={option} />


    </div>
  )
}
export default JazzComposersPage;