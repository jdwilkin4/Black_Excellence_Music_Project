const GameOptions = (props) => {
    return (
        <>
            <h2 className="my-6 text-4xl text-center">{props.greeting} </h2>
            <p className="my-2 text-xl text-center">Earnings: ${props.earnings}</p>
            <div className="flex  items-center flex-wrap justify-center">
                {props.gameInfo.map((options, index) => (

                    <div key={index} className="p-4 relative">
                        <div className=" border-2 border-purple-700	rounded-lg shadow px-8 py-2 pt-4">

                            <h2 className="text-2xl text-center mb-4 font-bold"> {options.title} </h2>
                            <img alt={options.alt} src={options.src} className="mx-auto object-cover rounded-lg h-40 w-40 " />

                            <p className="text-md text-center  w-60  mx-auto py-4">{options.description} </p>
                            <div className="flex justify-center	 items-center	">
                                <button onClick={options.handleClick} className="w-9/12  py-3 text-white bg-green-700  rounded-lg font-bold ">{options.btn}</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}
export default GameOptions;