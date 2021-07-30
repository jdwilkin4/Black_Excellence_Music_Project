
const ArtistTemplate = (props) => {
  return (
    <div className="flex flex-wrap justify-center items-center my-2">
      {props.arr.map((composer, index) => (
        <div key={index}>
          <div className={`my-4 border-r border-l border-b-8 border-t-8 ${props.borderColor} rounded-lg`} >
            <div className="w-96 flex">
              <div className="text-center w-full pt-9 pr-4">
                <h2 className="font-bold text-black-700">{composer.name}</h2>
                <p className="py-2 text-base">{composer.tag}</p>
              </div>
            </div>
            <div className="photo-wrapper p-2">
              <img className="w-40 h-40 rounded-full mx-auto" src={process.env.PUBLIC_URL + composer.image} alt={composer.alt} />
            </div>
            <div className="text-center my-8">
              <a rel="noreferrer" target="_blank" href={composer.bio} className={`w-1/2 px-4 py-3 text-white ${props.bgColor}  rounded-lg font-bold text-sm`}>Composer Bio</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ArtistTemplate;