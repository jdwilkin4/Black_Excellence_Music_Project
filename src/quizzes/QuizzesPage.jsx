import { Link } from 'react-router-dom';
import quizCards from './quiz-cards';
const QuizzesPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-8 ">Quizzes</h1>
      <div className="flex flex-row flex-wrap justify-center items-center my-2">
        {quizCards.map((artist, index) => (
          <div key={index}>
            <div className="mx-4 mb-4 border-r border-l border-b-8 border-t-8 border-purple-700 rounded-lg p-8  justify-between leading-normal">
              <div className="w-56 text-center mb-2">
                <h2 className="text-black font-bold text-lg mb-2">{artist.name}</h2>
                <div className="photo-wrapper p-2">
                  <img className="w-40 h-40 rounded-full mx-auto" src={artist.image} alt={artist.alt} />
                </div>
              </div>
              <div className="text-center mt-4 mb-8">
                <a rel="noreferrer" target="_blank" href={artist.bio} className="w-1/2 px-4 py-3 text-white bg-purple-700  rounded-lg font-bold text-sm">{artist.name} Bio</a>
              </div>
              <div className="text-center">
                <Link to={artist.quiz} className="w-1/2 px-4 py-3 text-white bg-green-700  rounded-lg font-bold text-sm">Take quiz</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
export default QuizzesPage;