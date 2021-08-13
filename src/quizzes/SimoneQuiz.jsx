import quiz from './simone-quiz-questions';
import QuizTemplate from './QuizTemplate';

const SimoneQuiz = () => {
    const image = '/images/nina-simone-quiz.jpg'
    const artist = 'Nina Simone'
    return (
        <QuizTemplate title={artist} image={process.env.PUBLIC_URL + image} quiz={quiz} />
    )
}
export default SimoneQuiz;