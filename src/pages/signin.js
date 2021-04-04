import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from 'containers/HeaderContainer'
import { FooterContainer } from 'containers/footer'
import { Form } from 'components'
import { FirebaseContext } from 'context/firebase'
import * as ROUTERS from 'constant/routes'

export default function SignIn(props) {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const isInvalid = email === '' || password === ''

  const handleSignIn = (e) => {
    e.preventDefault()

    setError(null)

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // console.log(userCredential)
        history.push(ROUTERS.HOME)
      })
      .catch((err) => {
        const { message } = err
        setError(message)
        setEmail('')
        setPassword('')
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={(e) => handleSignIn(e)} method="POST">
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
            <Form.Submit type="submit" disabled={isInvalid}>
              Log In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to="/signup">Sign Up now </Form.Link>
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
