import React, { useState, lazy, Suspense } from 'react';
import instrumentalists from '../artists-data/instrumentalists';
import Loading from '../misc-components/Loading';
const ArtistTemplate = lazy(() => import('../misc-components/ArtistTemplate'));
const renderLoader = () => <Loading />

const InstrumentalistPage = () => {
  const [option, setOption] = useState('all');
  const handleChange = (e) => setOption(e.target.value);
  const pianoArr = instrumentalists.filter(musician => musician.category === 'piano');
  const stringPlayersArr = instrumentalists.filter(musician => musician.category === 'strings');
  const percussionArr = instrumentalists.filter(musician => musician.category === 'percussion');
  const woodwindsArr = instrumentalists.filter(musician => musician.category === 'woodwinds');
  const brassPlayersArr = instrumentalists.filter(musician => musician.category === 'brass');

  const categoryObj = {
    "all": instrumentalists,
    "woodwinds": woodwindsArr,
    "brass": brassPlayersArr,
    "strings": stringPlayersArr,
    "percussion": percussionArr,
    "piano": pianoArr
  };

  const ChangeCategory = ({ category }) => {
    if (categoryObj.hasOwnProperty(category)) {
      return (
        <Suspense fallback={renderLoader()}>
          <ArtistTemplate
            arr={categoryObj[category]}
            borderColor="border-green-700"
            bgColor="bg-green-700"
          />
        </Suspense>
      )
    }
  };


  return (
    <div>
      <h1 className="text-5xl text-center my-8 ">Instrumentalists</h1>
      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center my-2">Filter by category</h2>
          <select onChange={handleChange} value={option} className="border border-purple-300 p-2 rounded">
            {Object.keys(categoryObj).map((instrument, index) => (
              <option value={instrument} key={index}>{instrument.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      <ChangeCategory category={option} />
    </div>

  )
}

export default InstrumentalistPage

