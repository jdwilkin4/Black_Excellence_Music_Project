import QuizTemplate from './QuizTemplate';
import quiz from './coleridge-taylor-quiz-questions';

const ColerdigeTaylorQuiz = () => {
    const image = 'https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Coleridge-Taylor_Samuel.jpg'
    const artist = "Samuel Coleridge-Taylor";
    return (
        <QuizTemplate image={image} title={artist} quiz={quiz} />
    )
}
export default ColerdigeTaylorQuiz;