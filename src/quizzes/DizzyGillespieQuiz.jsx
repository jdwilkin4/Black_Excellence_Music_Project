import quiz from './gillespie-quiz-questions';
import QuizTemplate from './QuizTemplate';

const DizzyGillespieQuiz = () => {
    const image = "https://willismusic.com/wp-content/uploads/2018/02/dizzy_gillespie.jpg";
    const artist = "Dizzy Gillespie";
    return (
        <QuizTemplate quiz={quiz} image={image} title={artist} />
    )
}
export default DizzyGillespieQuiz;