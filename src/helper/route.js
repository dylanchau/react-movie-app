import { Redirect, Route } from 'react-router-dom'

export const IsUserRedirect = ({
  user,
  loggedInPath,
  children,
  ...restProps
}) => (
  <Route
    {...restProps}
    render={() => {
      // user has logged in
      if (user) {
        return <Redirect to={{ pathname: loggedInPath }} />
      }

      // not logged in
      return children
    }}
  />
)

export const ProtectedRoute = ({ user, children, ...restProps }) => (
  <Route
    {...restProps}
    render={({ location }) => {
      if (user) {
        return children
      }

      return (
        <Redirect
          to={{
            pathname: 'signin',
            state: {
              from: location,
            },
          }}
        />
      )
    }}
  />
)
