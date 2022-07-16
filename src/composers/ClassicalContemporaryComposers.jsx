import React, { lazy, Suspense, useState } from "react";
import Loading from "../misc-components/Loading";
import contemporaryClassicalComposers from "../artists-data/contemporary-classical-composers";
const ArtistTemplate = lazy(() => import("../misc-components/ArtistTemplate"));
const renderLoader = () => <Loading />;
const femaleComposerArr = contemporaryClassicalComposers.filter(
  (composer) => composer.isFemale
);

const ChangeCategory = ({ category }) => {
  return (
    <Suspense fallback={renderLoader()}>
      {category === "all" ? (
        <ArtistTemplate
          arr={contemporaryClassicalComposers}
          borderColor="border-purple-700"
          bgColor="bg-purple-700"
        />
      ) : (
        <ArtistTemplate
          arr={femaleComposerArr}
          borderColor="border-green-700"
          bgColor="bg-green-700"
        />
      )}
    </Suspense>
  );
};

const ContemporaryClassicalComposers = () => {
  const [option, setOption] = useState("all");
  const handleChange = (e) => setOption(e.target.value);
  const values = ["all", "female"];

  return (
    <>
      <h1 className="text-5xl text-center my-8">
        Contemporary &amp; Classical Composers
      </h1>

      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-purple-900 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center my-2">Filter by category</h2>
          <select
            onChange={handleChange}
            value={option}
            className="border border-purple-300 p-2 rounded"
          >
            {values.map((val, index) => (
              <option value={val} key={index}>
                {val.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ChangeCategory category={option} />
    </>
  );
};
export default ContemporaryClassicalComposers;
