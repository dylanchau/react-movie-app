import { BrowserRouter as Router, Switch } from 'react-router-dom'

import * as ROUTES from './constant/routes'
import { IsUserRedirect, ProtectedRoute } from './helper/route'
import { authUserListener } from './hooks/index'
import { Browse, Home, SignIn, SignUp } from './pages'

export default function App() {
  const user = authUserListener()

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          exact
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          exact
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}
