import { fireEvent, render } from '@testing-library/react'
import { Form } from 'components'
import { MemoryRouter } from 'react-router-dom'

describe('<Form /> component', () => {
  it('Render Form component', () => {
    const mockSubmitForm = jest.fn()

    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>

        <Form.Base onSubmit={mockSubmitForm}>
          <Form.Input placeholder="Input" />
          <Form.Submit type="submit">Log In</Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix?
          <Form.Link to="/signup">Sign Up now </Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>,
      { wrapper: MemoryRouter }
    )

    expect(getByText('Sign In')).toBeTruthy()
    expect(getByPlaceholderText('Input')).toBeTruthy()
    expect(getByText('Log In')).toBeTruthy()
    expect(getByText('New to Netflix?')).toBeTruthy()
    expect(getByText('Sign Up now')).toBeTruthy()
    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy()

    fireEvent.click(getByText('Log In'))
    expect(mockSubmitForm).toHaveBeenCalledTimes(1)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render Form component with error', () => {
    const { container, getByText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Error>An Error happen</Form.Error>
      </Form>
    )

    expect(getByText('Sign In')).toBeTruthy()
    expect(getByText('An Error happen')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
