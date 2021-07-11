import QuizTemplate from './QuizTemplate';
import quiz from './armstrong-quiz-questions';

const ArmstrongQuiz = () => {
    const artist = "Louis Armstrong";
    const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Louis_Armstrong_restored.jpg/220px-Louis_Armstrong_restored.jpg"
    return (
        <QuizTemplate image={image} title={artist} quiz={quiz} />
    )
}
export default ArmstrongQuiz;