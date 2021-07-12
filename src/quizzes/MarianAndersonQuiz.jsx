import quiz from './marian-anderson-quiz-questions';
import QuizTemplate from './QuizTemplate';

const MarianAndersonQuiz = () => {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Marian_Anderson.jpg/220px-Marian_Anderson.jpg';
    const artist = 'Marian Anderson';
    return (
        <QuizTemplate title={artist} image={image} quiz={quiz} />
    )
}
export default MarianAndersonQuiz;