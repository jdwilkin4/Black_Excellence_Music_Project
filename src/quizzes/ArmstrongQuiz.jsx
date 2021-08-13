import QuizTemplate from './QuizTemplate';
import quiz from './armstrong-quiz-questions';

const ArmstrongQuiz = () => {
    const artist = "Louis Armstrong";
    const image = "/images/Louis-armstrong-quiz-page.jpg"
    return (
        <QuizTemplate image={process.env.PUBLIC_URL + image} title={artist} quiz={quiz} />
    )
}
export default ArmstrongQuiz;