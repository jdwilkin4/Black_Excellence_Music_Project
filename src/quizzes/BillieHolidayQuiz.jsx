import quiz from './holiday-quiz-questions';
import QuizTemplate from './QuizTemplate';

const BillieHolidayQuiz = () => {
    const image = '/images/billie-holiday-quiz.jpg';
    const artist = "Billie Holiday"
    return (
        <QuizTemplate title={artist} image={process.env.PUBLIC_URL + image} quiz={quiz} />
    )
}
export default BillieHolidayQuiz;