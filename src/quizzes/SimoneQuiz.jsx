import quiz from './simone-quiz-questions';
import QuizTemplate from './QuizTemplate';

const SimoneQuiz = () => {
    const image = 'https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg'
    const artist = 'Nina Simone'
    return (
        <QuizTemplate title={artist} image={image} quiz={quiz} />
    )
}
export default SimoneQuiz;