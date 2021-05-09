import { render } from '@testing-library/react'
import { OptForm } from 'components'

describe('<OptForm /> component', () => {
  it('Render OptForm component', () => {
    const { container, getByPlaceholderText, getByText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    )

    expect(getByPlaceholderText('Email Address')).toBeTruthy()
    expect(
      getByText(
        'Ready to watch? Enter your email to create or restart your membership'
      )
    ).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
