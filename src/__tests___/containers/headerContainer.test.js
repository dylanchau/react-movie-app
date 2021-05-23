import { render } from '@testing-library/react'
import { HeaderContainer } from 'containers/HeaderContainer'
import { MemoryRouter } from 'react-router-dom'

describe('<SelectProfileContainer />', () => {
  it('Profile container', () => {
    const { container, getByText, getByAltText } = render(
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>,
      { wrapper: MemoryRouter }
    )

    expect(getByAltText('Netflix')).toBeTruthy()
    expect(getByText('Sign In')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
