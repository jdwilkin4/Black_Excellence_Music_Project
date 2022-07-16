import { Route } from "react-router-dom";
import { lazy } from "react";
import quizCards from "./quiz-cards";
const QuizzesPage = lazy(() => import("./QuizzesPage"));
const QuizTemplate = lazy(() => import("./QuizTemplate"));

const QuizRoutes = () => {
  return (
    <>
      <Route path="/quizzes" exact component={QuizzesPage} />
      {quizCards.map((artist, index) => (
        <>
          <Route key={index} path={artist.quiz} exact>
            <QuizTemplate quiz={artist.questions} title={artist.name} />
          </Route>
        </>
      ))}
    </>
  );
};
export default QuizRoutes;
