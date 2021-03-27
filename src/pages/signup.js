import { useContext, useState } from 'react'
import { isEmpty, isEqual } from 'lodash'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTERS from '../constant/routes'

export default function SignUp(props) {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  const isInvalid =
    isEmpty(email) ||
    isEmpty(password) ||
    isEmpty(firstName) ||
    isEmpty(confirmPassword) ||
    !isEqual(password, confirmPassword)

  const handleSignUp = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential
        user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => history.push(ROUTERS.SIGN_IN))
      })
      .catch((err) => {
        const errorMessage = err.message
        setError(errorMessage)
        setPassword('')
        setConfirmPassword('')
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={(e) => handleSignUp(e)} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Last name"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
            <Form.Input
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autocomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Confirm password"
              autocomplete="off"
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <Form.Link to="/signin">Sign In</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices facilisis augue, ac molestie libero elementum eu.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
