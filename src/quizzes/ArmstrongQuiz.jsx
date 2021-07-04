import { useState } from 'react';
import armstrongQuizQuestions from './armstrong-quiz-questions';

const ArmstrongQuiz = () => {
    const [buttonClick, setButtonClick] = useState(false);

    const showFirstQuestion = () => setButtonClick(true);

    return (
        <div>
            <h1>How well do you know Louis Armstrong?</h1>
            {buttonClick ? <QuestionOne /> : <button onClick={showFirstQuestion}>Start Quiz</button>}
        </div>

    )
}

const QuestionOne = () => {
    return (
        <h1>question 1</h1>
    )
}

export default ArmstrongQuiz;