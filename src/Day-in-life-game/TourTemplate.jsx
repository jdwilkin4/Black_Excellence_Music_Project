const TourTemplate = (props) => {
    return (
        <>
            <div className="container text-center mx-auto p-4">
                <div className="flex justify-center rounded-lg text-lg m-6" role="group">
                    {
                        props.arr.map((city, index) => (
                            <button onClick={city.locationFunction} key={index} className="bg-purple-700 mx-4 text-white hover:bg-green-700 rounded p-4 mx-0 outline-none focus:shadow-outline" type="button">
                                {city.location}
                            </button>
                        ))
                    }
                </div>
                <img className="h-60 mx-auto w-full hidden lg:block lg:w-1/2  rounded" src={props.img} alt={props.alt} />

            </div>


        </>
    )
}
export default TourTemplate;

/*       <div>
                <img className="h-80 w-full hidden lg:block lg:w-1/2  rounded-l-lg" src={props.img} alt={props.alt} />

                {
                    props.arr.map((city, index) => (
                        <button onClick={city.locationFunction} key={index} className='py-2 flex justify-center content-center px-2 my-2 text-2xl bg-purple-700 text-white w-9/12  text-center rounded-lg' type="button">
                            {city.location}
                        </button>
                    ))
                }
            </div> */