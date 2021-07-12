import quiz from './holiday-quiz-questions';
import QuizTemplate from './QuizTemplate';

const BillieHolidayQuiz = () => {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Billie_Holiday_1947_%28cropped%29.jpg/220px-Billie_Holiday_1947_%28cropped%29.jpg';
    const artist = "Billie Holiday"
    return (
        <QuizTemplate title={artist} image={image} quiz={quiz} />
    )
}
export default BillieHolidayQuiz;