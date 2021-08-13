import quiz from './fitzgerald-quiz-questions';
import QuizTemplate from './QuizTemplate';

const FitzgeraldQuiz = () => {
    const artist = 'Ella Fitzgerald';
    const image = '/images/ella-fitzgerald-quiz.jpg';
    return (
        <QuizTemplate image={process.env.PUBLIC_URL + image} title={artist} quiz={quiz} />
    )
}
export default FitzgeraldQuiz;
