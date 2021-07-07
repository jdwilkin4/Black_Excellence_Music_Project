import { useState } from 'react';
import quiz from './armstrong-quiz-questions';

const btnStyles = { cursor: "pointer" };

const StartQuiz = () => {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [showQuizPage, setShowQuizPage] = useState(true);
    const [userPoints, setUserPoints] = useState(0);
    const [totalQuestionsCorrect, setTotalQuestionsCorrect] = useState(0);
    const totalPossiblePoints = 100;

    const nextQuestion = (isCorrect) => {
        if (isCorrect) {
            setUserPoints(userPoints + 10);
            setTotalQuestionsCorrect(totalQuestionsCorrect + 1);
        }
        currQuestion === quiz.length - 1
            ? setShowQuizPage(false)
            : setCurrQuestion(currQuestion + 1);
    };
    return (
        <>
            {showQuizPage ? (
                <div>
                    <h2>{quiz[currQuestion].question}</h2>
                    {quiz[currQuestion].answers.map((answer, index) => (
                        <div key={index}>
                            <button
                                onClick={() => nextQuestion(answer.isCorrect)}
                                style={btnStyles}
                            >
                                {answer.options}
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                    <ResultsPage
                        totalPoints={totalPossiblePoints}
                        points={userPoints}
                        correctAnswers={totalQuestionsCorrect}
                    />
                )}
        </>
    );
};

const ResultsPage = (props) => {
    const [playAgain, setPlayAgain] = useState(false);
    const resetQuiz = () => setPlayAgain(true);
    return (
        <>
            {playAgain ? (
                <StartQuiz />
            ) : (
                    <>
                        <h2>Results:</h2>
                        <p>
                            You got {props.correctAnswers} out of {quiz.length}
                        </p>
                        <p>
                            You got {props.points} out of {props.totalPoints}
                        </p>
                        <button onClick={resetQuiz} style={btnStyles}>
                            Take again?
            </button>
                    </>
                )}
        </>
    );
};

const ArmstrongQuiz = () => {

    const [showStarterPrompt, setShowStarterPrompt] = useState(true);
    const displayQuiz = () => setShowStarterPrompt(false);

    return (
        <>
            {showStarterPrompt ? (
                <div>
                    <h1>How well do you know Duke Ellington?</h1>
                    <p>Test your skills</p>
                    <button style={btnStyles} onClick={displayQuiz}>
                        Start quiz
            </button>
                </div>
            ) : (
                    <StartQuiz />
                )}
        </>
    );

}


export default ArmstrongQuiz;