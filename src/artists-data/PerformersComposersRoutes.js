import { Route } from 'react-router-dom';
import { lazy } from 'react';
const VocalistsPage = lazy(() => import('../Performers/VocalistsPage'))
const InstrumentalistPage = lazy(() => import('../Performers/Instrumentalists'))
const JazzComposersPage = lazy(() => import('../composers/JazzComposers'))
const ContemporaryClassicalComposers = lazy(() => import('../composers/ClassicalContemporaryComposers'))

const PerformersComposersRoutes = () => {
  return (
    <>
      <Route path="/contemporary-composers" exact component={ContemporaryClassicalComposers} />
      <Route path="/jazz-composers" exact component={JazzComposersPage} />
      <Route path="/instrumentalists" exact component={InstrumentalistPage} />
      <Route path="/vocalists" exact component={VocalistsPage} />
    </>
  )
}
export default PerformersComposersRoutes;