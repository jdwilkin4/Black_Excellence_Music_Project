import { useState } from 'react';

const btnStyles = { cursor: "pointer" };


const QuizTemplate = (props) => {
    const quizArr = props.quiz
    const [currQuestion, setCurrQuestion] = useState(0);
    const [showQuizPage, setShowQuizPage] = useState(true);
    const [userPoints, setUserPoints] = useState(0);
    const [totalQuestionsCorrect, setTotalQuestionsCorrect] = useState(0);
    const totalPossiblePoints = 100;
    const [showStarterPrompt, setShowStarterPrompt] = useState(true);
    const displayQuiz = () => setShowStarterPrompt(false);

    const resetQuiz = () => {
        setShowQuizPage(true)
        setCurrQuestion(0)
        setUserPoints(0)
        setTotalQuestionsCorrect(0)
    }

    const nextQuestion = (isCorrect) => {
        if (isCorrect) {
            setUserPoints(userPoints + 20);
            setTotalQuestionsCorrect(totalQuestionsCorrect + 1);
        }
        currQuestion === quizArr.length - 1
            ? setShowQuizPage(false)
            : setCurrQuestion(currQuestion + 1);
    };
    //Needs refactoring!
    return (
        <>
            {showStarterPrompt ? (
                <div className="bg-white dark:bg-gray-800 ">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h1 className="text-5xl text-center my-8 ">How well do you know {props.title}?</h1>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button style={btnStyles} onClick={displayQuiz} className="py-4 px-6  bg-purple-700  text-white w-full  rounded-lg ">
                                    Start quiz
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <div>
                        {showQuizPage ? (
                            <div>
                                <h2 className="text-4xl text-center ">  {quizArr[currQuestion].question}  </h2>

                                <div className="relative bg-white dark:bg-gray-800 p-4">
                                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                                        <div className="lg:col-start-2 md:pl-20">

                                            {quizArr[currQuestion].answers.map((answer, index) => (
                                                <div key={index}>
                                                    <button className='py-2 px-2 my-2 text-2xl bg-purple-700 text-white w-9/12  text-center rounded-lg'
                                                        onClick={() => nextQuestion(answer.isCorrect)}
                                                        style={btnStyles}
                                                    >
                                                        {answer.options}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                                            <img src={props.image} alt={props.title} className="relative mx-auto shadow-lg rounded w-6/12 " />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                                <>
                                    {showQuizPage ? (
                                        <div>
                                            <h2 className="text-4xl text-center ">  {quizArr[currQuestion].question}  </h2>

                                            <div className="relative bg-white dark:bg-gray-800 p-4">
                                                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                                                    <div className="lg:col-start-2 md:pl-20">

                                                        {quizArr[currQuestion].answers.map((answer, index) => (
                                                            <div key={index}>
                                                                <button className='py-2 px-2 my-2 text-2xl bg-purple-700 text-white w-9/12  text-center rounded-lg'
                                                                    onClick={() => nextQuestion(answer.isCorrect)}
                                                                    style={btnStyles}

                                                                >
                                                                    {answer.options}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                                                        <img src={props.image} alt={props.title} className="relative mx-auto shadow-lg rounded w-6/12 " />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ) : (
                                            <>

                                                <div style={{ margin: 'auto' }} className="flex justify-center content-center item-center max-w-md bg-white shadow-lg rounded-lg overflow-hidden">

                                                    <div className="w-2/3 p-4">
                                                        <h2 className="text-black-900 font-bold text-2xl">  Results  </h2>
                                                        <p className="mt-2 text-black-600 text-xl">{totalQuestionsCorrect}  out of {quizArr.length} correct </p>

                                                        <div className="flex-col item-center justify-between my-3">
                                                            <p> {userPoints} points out of {totalPossiblePoints} points </p>
                                                            <button
                                                                className='py-2 px-2  bg-purple-700  text-white w-full rounded-lg '
                                                                onClick={resetQuiz}
                                                                style={btnStyles}
                                                            >
                                                                Take again?
                                                             </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                </>
                            )}
                    </div>

                )}
        </>
    );

}


export default QuizTemplate;