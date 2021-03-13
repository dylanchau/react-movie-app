import { useState } from 'react'
import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'

export default function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const isInvalid = email === '' || password === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(`you clicked Login button ${e}`)
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={(e) => handleSubmit(e)} method="POST">
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
            <Form.Link to="/signup">Sign Up</Form.Link>
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
