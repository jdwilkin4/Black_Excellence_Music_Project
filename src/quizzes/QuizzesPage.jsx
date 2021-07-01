
const QuizzesPage = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-8 ">Quizzes</h1>


            <div class="flex flex-wrap max-w-md w-full lg:flex m-4">

                <div class="my-4 border-r border-l border-b-8 border-t-8 border-purple-700 rounded-lg p-8 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <h2 class="text-black font-bold text-xl mb-2">Artist quiz</h2>
                        <div className="photo-wrapper p-2">
                            <img className="w-40 h-40 rounded-full mx-auto" src='' alt='' />
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <a rel="noreferrer" target="_blank" href='' className="w-1/2 px-4 py-3 text-white bg-purple-700  rounded-lg font-bold text-sm">Read Artist Bio</a>
                    </div>
                    <div className="text-center my-2">
                        <a href='' className="w-1/2 px-4 py-3 text-white bg-green-700  rounded-lg font-bold text-sm">Take quiz</a>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default QuizzesPage;