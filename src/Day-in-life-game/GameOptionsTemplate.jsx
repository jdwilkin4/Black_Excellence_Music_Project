const GameOptionsTemplate = (props) => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-6">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <img className="h-auto w-full hidden lg:block lg:w-1/2  rounded-l-lg" src={props.img} alt={props.alt} />

                    <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none">
                        {props.arr.map((city, index) => (
                            <button onClick={city.locationFunction} key={index} className='py-2 px-2 my-2 text-2xl bg-purple-700 text-white w-9/12  text-center rounded-lg' type="button">
                                {city.location}
                            </button>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameOptionsTemplate;