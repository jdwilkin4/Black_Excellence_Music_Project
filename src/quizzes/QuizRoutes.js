import { Route } from 'react-router-dom';
import QuizzesPage from './QuizzesPage';
import ArmstrongQuiz from './ArmstrongQuiz';
import FitzgeraldQuiz from './FitzgeraldQuiz';
import ColerdigeTaylorQuiz from './ColeridgeTaylorQuiz';
import SimoneQuiz from './SimoneQuiz';
import RayCharlesQuiz from './RayCharlesQuiz';
import MarianAndersonQuiz from './MarianAndersonQuiz';
import DizzyGillespieQuiz from './DizzyGillespieQuiz';
import BillieHolidayQuiz from './BillieHolidayQuiz';


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