import { Route } from 'react-router-dom';
import ContemporaryClassicalComposers from '../composers/ClassicalContemporaryComposers';
import JazzComposersPage from '../composers/JazzComposers';
import InstrumentalistPage from '../Performers/Instrumentalists';
import VocalistsPage from '../Performers/VocalistsPage';

const PerformersComposersRoutes = () => {
    return (
        <div>
            <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
            <Route path="/jazz-composers" exact component={JazzComposersPage} />
            <Route path="/instrumentalists" exact component={InstrumentalistPage} />
            <Route path="/vocalists" exact component={VocalistsPage} />
        </div>
    )
}
export default PerformersComposersRoutes;