
const Footer = () => {
    return (
        <footer className="bg-purple-800">
            <div className="md:container md:mx-auto mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-white">
                        <h2 className="my-4 text-2xl font-bold leading-tight">
                            Black Excellence Music Project
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white font-bold md:mb-6">Resources</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://afrovoices.com/" target="_blank" rel="noreferrer" className="underline text-white">AfroVoices</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://chevalierdesaintgeorges.homestead.com/index.html" target="_blank" rel="noreferrer" className="underline text-white">AfriClassical</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.blackpast.org/" target="_blank" rel="noreferrer" className="underline text-white">BlackPast</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.youtube.com/watch?v=FIWELCEBG0E&list=PLqHdMZJ08WM11cAx7YqdmvHb5YawvM0sq" target="_blank" rel="noreferrer" className="underline text-white">Black Excellence YouTube Series</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white font-bold md:mb-6">Composer Databases</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.composerdiversity.com/" target="_blank" rel="noreferrer" className="underline text-white">Institute for Composer Diversity</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.musicbyblackcomposers.org/resources/living-composers-directory/" target="_blank" rel="noreferrer" className="underline text-white ">Music By Black Composers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white font-bold md:mb-6">Social Media</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.youtube.com/channel/UCI0LQVebPSgovg-qJCGEqjg/playlists" target="_blank" rel="noreferrer" className="underline text-white"> YouTube Channel</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.facebook.com/blackexcellencemusicproject/" target="_blank" rel="noreferrer" className="underline text-white "> Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://twitter.com/BlackEx63860012" target="_blank" rel="noreferrer" className="underline text-white"> Twitter</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="https://www.instagram.com/blackexcellencemusicproject31/" target="_blank" rel="noreferrer" className="underline text-white "> Instagram</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;