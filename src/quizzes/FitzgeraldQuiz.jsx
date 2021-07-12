import quiz from './fitzgerald-quiz-questions';
import QuizTemplate from './QuizTemplate';

const FitzgeraldQuiz = () => {
    const artist = 'Ella Fitzgerald';
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ella_Fitzgerald_%28Gottlieb_02871%29.jpg/220px-Ella_Fitzgerald_%28Gottlieb_02871%29.jpg';
    return (
        <QuizTemplate image={image} title={artist} quiz={quiz} />
    )
}
export default FitzgeraldQuiz;
