import { render } from '@testing-library/react'
import { Feature } from 'components'

describe('<Feature /> component', () => {
  it('Render feature component', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    )

    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy()
    expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render feature component with Title only', () => {
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      </Feature>
    )

    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy()
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
