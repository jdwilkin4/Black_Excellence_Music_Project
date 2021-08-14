const Loading = () => {
    return (
        <div class="bg-gradient-to-r from-purple-300 to-blue-200">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-200 text-center pt-8">
                        <h1 class="text-6xl font-bold text-purple-400">Loading...</h1>
                        <p class="text-2xl mt-4 pb-4 px-12 font-medium">
                            Your page will load soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;
