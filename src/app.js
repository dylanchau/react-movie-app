import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import * as ROUTES from './constant/routes'
import { Home } from './pages'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
