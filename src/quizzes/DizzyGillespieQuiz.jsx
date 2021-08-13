import quiz from './gillespie-quiz-questions';
import QuizTemplate from './QuizTemplate';

const DizzyGillespieQuiz = () => {
    const image = "/images/dizzy-gillespie-quiz.jpg";
    const artist = "Dizzy Gillespie";
    return (
        <QuizTemplate quiz={quiz} image={process.env.PUBLIC_URL + image} title={artist} />
    )
}
export default DizzyGillespieQuiz;