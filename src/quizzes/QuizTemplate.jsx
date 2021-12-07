import { useState } from 'react';

const btnStyles = { cursor: "pointer" };

const QuizTemplate = ({ quiz, image, title }) => {
  let quizArr, artistImage, quizTitle;

  [quizArr, artistImage, quizTitle] = [quiz, image, title]

  const [currQuestion, setCurrQuestion] = useState(0);
  const [showQuizPage, setShowQuizPage] = useState(true);
  const [userPoints, setUserPoints] = useState(0);
  const [totalQuestionsCorrect, setTotalQuestionsCorrect] = useState(0);
  const totalPossiblePoints = 100;
  const [showStarterPrompt, setShowStarterPrompt] = useState(true);
  const displayQuiz = () => setShowStarterPrompt(false);
  const currentQuizQuestion = quizArr[currQuestion];

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

  return (
    <>
      {showStarterPrompt ?
        <StartQuizBtn
          showQuiz={displayQuiz}
          title={quizTitle}
        />
        :
        <>
          {
            showQuizPage ?
              <QuizQuestions
                title={quizTitle}
                image={artistImage}
                nextQuestion={nextQuestion}
                quizQuestion={currentQuizQuestion}
              />
              :
              <ResultsPage
                resetQuiz={resetQuiz}
                totalCorrect={totalQuestionsCorrect}
                quiz={quizArr}
                userPoints={userPoints}
                totalPoints={totalPossiblePoints}
              />

          }
        </>

      }
    </>
  );

}
const StartQuizBtn = ({ showQuiz, title }) => {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h1 className="text-5xl text-center my-8 ">How well do you know {title}?</h1>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button style={btnStyles} onClick={showQuiz} className="py-4 px-6  bg-purple-700  text-white w-full  rounded-lg ">
              Start quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

const QuizQuestions = ({ quizQuestion, nextQuestion, image, title }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl mt-6 mb-2 text-center">{quizQuestion.question}</h2>

      <div className="container text-center mx-auto p-4">
        <div className="flex flex-col justify-center rounded-lg  my-2" role="group">

          {quizQuestion.answers.map((answer, index) => (
            <div key={index}>
              <button className="bg-purple-700 my-2 text-2xl text-white hover:bg-green-700 rounded px-4 outline-none focus:shadow-outline"
                onClick={() => nextQuestion(answer.isCorrect)}
                style={btnStyles}
              >
                {answer.options}
              </button>
            </div>
          ))}
        </div>

        <img src={image} alt={title} className="h-80 mx-auto w-full hidden lg:block lg:w-1/2 rounded" />
      </div>
    </div>

  )
};

const ResultsPage = ({ totalCorrect, quiz, userPoints, totalPoints, resetQuiz }) => {
  return (
    <div style={{ margin: 'auto' }} className="flex  justify-center content-center item-center max-w-md bg-white border border-purple-700  rounded-lg overflow-hidden">

      <div className="w-2/3 my-4 p-4">
        <h2 className="text-black-900 mb-12 text-center font-bold text-2xl">  Results  </h2>
        <p className="mt-2 text-center text-black-600 text-xl">{totalCorrect}  out of {quiz.length} correct </p>

        <div className="flex-col text-center item-center justify-between my-4">
          <p> {userPoints} points out of {totalPoints} points </p>
          <button
            className='py-2 px-2 my-10  bg-purple-700  text-white w-full rounded-lg '
            onClick={resetQuiz}
            style={btnStyles}
          >
            Take again?
          </button>

        </div>
      </div>
    </div>
  )
}


export default QuizTemplate;