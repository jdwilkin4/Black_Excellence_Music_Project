const Loading = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-6xl font-bold text-purple-400">Loading...</h1>
                        <p className="text-2xl mt-4 pb-4 px-12 font-medium">
                            Your page will load soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;
