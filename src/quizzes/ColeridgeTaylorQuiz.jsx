import QuizTemplate from './QuizTemplate';
import quiz from './coleridge-taylor-quiz-questions';

const ColerdigeTaylorQuiz = () => {
    const image = '/images/samuel-coleridge-taylor-quiz.jpg'
    const artist = "Samuel Coleridge-Taylor";
    return (
        <QuizTemplate image={process.env.PUBLIC_URL + image} title={artist} quiz={quiz} />
    )
}
export default ColerdigeTaylorQuiz;