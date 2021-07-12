import quiz from './ray-charles-quiz-questions';
import QuizTemplate from './QuizTemplate';

const RayCharlesQuiz = () => {
    const artist = 'Ray Charles';
    const image = "https://images.pulsewebcontent.com/photos/2018/06_Jun/800/RayCharles_6_15.jpg"
    return (
        <QuizTemplate image={image} quiz={quiz} title={artist} />
    )
}
export default RayCharlesQuiz;