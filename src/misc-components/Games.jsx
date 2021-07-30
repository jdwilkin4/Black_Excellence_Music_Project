import { Link } from "react-router-dom";


const Games = () => {
    return (
        <>
            <h1 className="text-5xl text-center my-6">Games</h1>
            <GamesTemplate
                text={'Experience what is was like to be a young black jazz pianist in 1930\'s America.'}
                path='/dayinlife'
                linkName='Day in the Life'
                img={process.env.PUBLIC_URL + "/images/NYC (1).jpg"}
                alt='New York City'
                gameCategory='Day in the Life Game'
            />
            <GamesTemplate
                text='How well do you know these artists?'
                path='/quizzes'
                linkName='Take a quiz'
                img={process.env.PUBLIC_URL + '/images/jazz-painting.jpg'}
                alt='Jazz Painting'
                gameCategory='Quizzes'
            />

        </>
    )
}
export default Games;


//games template

const GamesTemplate = (props) => {
    return (
        <div className="mx-auto px-4 py-8 max-w-xl my-10">
            <div className="bg-white shadow-2xl rounded-lg  tracking-wide" >
                <div className="md:flex-shrink-0">
                    <img src={props.img} alt={props.alt} className="w-full h-64 rounded-lg rounded-b-none" />
                </div>
                <div className="px-4 py-2">
                    <h2 className="font-bold text-center text-2xl text-black-800 tracking-normal">{props.gameCategory}</h2>
                </div>

                <p className=" pt-4 text-xl text-center"> {props.text} </p>
                <div className=" text-center mt-4 mb-8">
                    <Link
                        className=" px-4 py-2 font-bold text-white bg-purple-700 rounded-full focus:outline-none focus:shadow-outline"
                        to={props.path}>
                        {props.linkName}
                    </Link>
                </div>


            </div>
        </div>
    )
}
