import React, { useState, lazy, Suspense } from "react";
import vocalists from "../artists-data/vocalists";
import Loading from "../misc-components/Loading";
const ArtistTemplate = lazy(() => import("../misc-components/ArtistTemplate"));
const renderLoader = () => <Loading />;

const VocalistsPage = () => {
  const [option, setOption] = useState("all");
  const handleChange = (e) => setOption(e.target.value);
  const valuesArr = ["all", "jazz", "classical"];
  const classicalVocalArr = vocalists.filter(
    (musician) => musician.category === "classical"
  );
  const jazzVocalArr = vocalists.filter(
    (musician) => musician.category === "jazz"
  );

  const categoryObj = {
    all: vocalists,
    classical: classicalVocalArr,
    jazz: jazzVocalArr,
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
      );
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-center my-8 ">Vocalists</h1>
      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center my-2">Filter by category</h2>
          <select
            onChange={handleChange}
            value={option}
            className="border border-purple-300 p-2 rounded"
          >
            {valuesArr.map((val, index) => (
              <option value={val} key={index}>
                {val.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ChangeCategory category={option} />
    </div>
  );
};
export default VocalistsPage;
