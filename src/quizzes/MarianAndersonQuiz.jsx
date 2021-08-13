import quiz from './marian-anderson-quiz-questions';
import QuizTemplate from './QuizTemplate';

const MarianAndersonQuiz = () => {
    const image = '/images/marian-anderson-quiz.jpg';
    const artist = 'Marian Anderson';
    return (
        <QuizTemplate title={artist} image={process.env.PUBLIC_URL + image} quiz={quiz} />
    )
}
export default MarianAndersonQuiz;