import { Route } from 'react-router-dom';
import { lazy } from 'react';
const BillieHolidayQuiz = lazy(() => import('./BillieHolidayQuiz'))
const DizzyGillespieQuiz = lazy(() => import('./DizzyGillespieQuiz'))
const MarianAndersonQuiz = lazy(() => import('./MarianAndersonQuiz'))
const RayCharlesQuiz = lazy(() => import('./RayCharlesQuiz'))
const SimoneQuiz = lazy(() => import('./SimoneQuiz'))
const ColerdigeTaylorQuiz = lazy(() => import('./ColeridgeTaylorQuiz'))
const FitzgeraldQuiz = lazy(() => import('./FitzgeraldQuiz'))
const ArmstrongQuiz = lazy(() => import('./ArmstrongQuiz'))
const QuizzesPage = lazy(() => import('./QuizzesPage'));

const QuizRoutes = () => {
  return (
    <div>
      <Route path="/quizzes" exact component={QuizzesPage} />
      <Route path="/armstrongquiz" exact component={ArmstrongQuiz} />
      <Route path="/fitzgeraldquiz" exact component={FitzgeraldQuiz} />
      <Route path="/coleridgequiz" exact component={ColerdigeTaylorQuiz} />
      <Route path='/simonequiz' exact component={SimoneQuiz} />
      <Route path='/charlesquiz' exact component={RayCharlesQuiz} />
      <Route path="/andersonquiz" exact component={MarianAndersonQuiz} />
      <Route path="/gillespiequiz" exact component={DizzyGillespieQuiz} />
      <Route path="/holidayquiz" exact component={BillieHolidayQuiz} />
    </div>
  )
}
export default QuizRoutes;