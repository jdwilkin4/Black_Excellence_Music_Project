import quiz from './ray-charles-quiz-questions';
import QuizTemplate from './QuizTemplate';

const RayCharlesQuiz = () => {
    const artist = 'Ray Charles';
    const image = "/images/RayCharles-quiz.jpg"
    return (
        <QuizTemplate image={process.env.PUBLIC_URL + image} quiz={quiz} title={artist} />
    )
}
export default RayCharlesQuiz;